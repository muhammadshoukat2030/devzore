/**
 * DevZore Analytics & Conversion Event Dispatcher
 * Safely dispatches custom events to Google Analytics 4 (GA4), dataLayer, and custom events.
 */

export const trackEvent = (eventName, params = {}) => {
  try {
    if (typeof window === "undefined") return;

    // 1. Google Analytics 4 (gtag)
    if (typeof window.gtag === "function") {
      window.gtag("event", eventName, params);
    }

    // 2. Google Tag Manager (dataLayer)
    if (Array.isArray(window.dataLayer)) {
      window.dataLayer.push({
        event: eventName,
        ...params,
        timestamp: new Date().toISOString(),
      });
    }

    // 3. Custom DOM event for local hooks/listeners
    window.dispatchEvent(
      new CustomEvent("devzore_analytics", {
        detail: { eventName, params },
      })
    );
  } catch (err) {
    // Fail silently in production to never block user actions
    console.debug("Analytics dispatch error:", err);
  }
};

/**
 * Track WhatsApp click with originating page/section
 */
export const trackWhatsAppClick = (source = "general") => {
  trackEvent("whatsapp_click", {
    event_category: "Conversion",
    event_label: source,
    source,
  });
};

/**
 * Track contact / project brief form submission
 */
export const trackLeadSubmission = (formName = "contact_form", details = {}) => {
  trackEvent("generate_lead", {
    event_category: "Conversion",
    event_label: formName,
    form_name: formName,
    ...details,
  });
};

/**
 * Track case study read
 */
export const trackCaseStudyView = (slug) => {
  trackEvent("case_study_view", {
    event_category: "Engagement",
    event_label: slug,
    slug,
  });
};
