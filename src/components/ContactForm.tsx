"use client";

import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResponseMessage(null);

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setResponseMessage("Email sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setResponseMessage(result.message || "Something went wrong.");
      }
    } catch (error) {
      console.error(error);
      setResponseMessage("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-lg p-8 rounded-lg shadow-md flex flex-col gap-6"
    >
      <div className="flex flex-col gap-2">
        <label
          htmlFor="name"
          className="text-sm font-medium font-[family-name:var(--font-geist-mono)]"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Ola Nordmann"
          value={formData.name}
          onChange={handleChange}
          required
          className="border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none font-[family-name:var(--font-geist-sans)] text-black"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label
          htmlFor="email"
          className="text-sm font-medium font-[family-name:var(--font-geist-mono)]"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="youremail@example.com"
          value={formData.email}
          onChange={handleChange}
          required
          className="border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none font-[family-name:var(--font-geist-sans)] text-black"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label
          htmlFor="message"
          className="text-sm font-medium font-[family-name:var(--font-geist-mono)]"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          className="border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none font-[family-name:var(--font-geist-sans)] text-black"
        />
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
      >
        {isSubmitting ? "Sending..." : "Send"}
      </button>
      {responseMessage && (
        <p
          className={`text-center text-sm font-[family-name:var(--font-geist-mono)] ${
            responseMessage.includes("successfully")
              ? "text-green-600"
              : "text-red-600"
          }`}
        >
          {responseMessage}
        </p>
      )}
    </form>
  );
};

export default ContactForm;
