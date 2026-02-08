const WEBHOOK_URL =
  "https://webhook.site/5153a182-f8f5-49d9-a676-5563965fa962";

export const sendWebhookEvent = (event, data = {}) => {
  if (typeof window === "undefined") return;

  const payload = JSON.stringify({
    event,
    ts: Date.now(),
    ua: navigator.userAgent,
    ...data,
  });

  if (navigator.sendBeacon) {
    navigator.sendBeacon(WEBHOOK_URL, payload);
    return;
  }

  fetch(WEBHOOK_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: payload,
    keepalive: true,
  }).catch(() => {});
};
