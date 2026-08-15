"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { CheckIcon } from "@/components/icons";
import { WEB3FORMS_ACCESS_KEY, site } from "@/data/site";

type Status = "idle" | "submitting" | "success" | "error";

const fieldClasses =
  "w-full rounded-xl border border-ink-200 bg-white px-4 py-3 text-ink-900 placeholder:text-ink-400 transition focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20";

const labelClasses = "block text-sm font-medium text-ink-800";

/**
 * Posts directly to the Web3Forms API — no backend required, which keeps the
 * site a pure static export. Set the access key in `@/data/site`.
 */
export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("submitting");
    setError(null);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `New enquiry from the ${site.name} website`,
          from_name: site.name,
          ...Object.fromEntries(new FormData(form)),
        }),
      });

      const result: { success?: boolean; message?: string } =
        await response.json();

      if (result.success) {
        setStatus("success");
        form.reset();
        return;
      }

      setStatus("error");
      setError(
        result.message ??
          "We could not send your message. Please try again, or email us directly.",
      );
    } catch {
      setStatus("error");
      setError(
        "We could not reach the mail service. Please check your connection, or email us directly.",
      );
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="rounded-2xl border border-brand-200 bg-brand-50 p-8 text-center"
      >
        <span className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand-600 text-white">
          <CheckIcon className="h-6 w-6" />
        </span>
        <h2 className="mt-5 font-display text-xl font-semibold text-ink-900">
          Message sent
        </h2>
        <p className="mt-2 text-ink-600">
          Thank you for getting in touch. We will get back to you shortly.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm font-medium text-brand-700 underline underline-offset-4 transition hover:text-brand-800"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate={false}>
      {/* Honeypot — hidden from users, filled in by bots. */}
      <input
        type="checkbox"
        name="botcheck"
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />

      <div>
        <label htmlFor="name" className={labelClasses}>
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          placeholder="Your name"
          className={`mt-2 ${fieldClasses}`}
        />
      </div>

      <div>
        <label htmlFor="email" className={labelClasses}>
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="you@company.com"
          className={`mt-2 ${fieldClasses}`}
        />
      </div>

      <div>
        <label htmlFor="message" className={labelClasses}>
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          placeholder="Tell us a little about what you need."
          className={`mt-2 resize-y ${fieldClasses}`}
        />
      </div>

      {error ? (
        <p
          role="alert"
          className="rounded-xl border border-accent-200 bg-accent-50 px-4 py-3 text-sm text-accent-900"
        >
          {error}
        </p>
      ) : null}

      <Button
        type="submit"
        size="lg"
        disabled={status === "submitting"}
        className="w-full sm:w-auto"
      >
        {status === "submitting" ? "Sending…" : "Send message"}
      </Button>

      <p className="text-xs leading-relaxed text-ink-500">
        Your message is delivered straight to our inbox. We use it only to reply
        to your enquiry.
      </p>
    </form>
  );
}
