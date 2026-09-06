type LayagoErrorOptions = {
  mechanism?:
    "manual" | "onerror" | "unhandledrejection" | "react_error_boundary";
  handled?: boolean;
  severity?: "error" | "warning" | "info";
};

type LayagoEvents = {
  captureException?: (
    error: unknown,
    context?: Record<string, unknown>,
    options?: LayagoErrorOptions,
  ) => void;
};

declare global {
  interface Window {
    __layagoEvents?: LayagoEvents;
    __layagoReportRuntimeError?: (payload: {
      message: string;
      stack?: string;
      filename?: string;
    }) => void;
  }
}

export function reportLayagoError(
  error: unknown,
  context: Record<string, unknown> = {},
) {
  if (typeof window === "undefined") return;
  window.__layagoEvents?.captureException?.(
    error,
    {
      source: "react_error_boundary",
      route: window.location.pathname,
      ...context,
    },
    {
      mechanism: "react_error_boundary",
      handled: false,
      severity: "error",
    },
  );
  // Forward to Layago reporting hook if present
  const message =
    error instanceof Response
      ? `Response ${error.status}${error.url ? ` at ${error.url}` : ""}`
      : error instanceof Error
        ? error.message
        : String(error);
  const stack = error instanceof Error ? error.stack : undefined;
  window.__layagoReportRuntimeError?.({
    message,
    ...(stack !== undefined && { stack }),
    filename: window.location.pathname,
  });
}
