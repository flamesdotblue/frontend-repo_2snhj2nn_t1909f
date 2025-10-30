import { Mail, Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Let’s build something</h2>
          <p className="mt-3 text-gray-600">
            Have a project in mind or just want to say hi? Drop a message and I’ll get back soon.
          </p>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-3">
          <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gray-900 text-white">
              <Mail size={18} />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-gray-900">Email</h3>
            <p className="mt-1 text-gray-600">I usually respond within 24 hours.</p>
            <a href="mailto:hello@example.com" className="mt-4 inline-block text-sm font-medium text-gray-900 hover:underline">
              hello@example.com
            </a>
          </div>

          <form className="lg:col-span-2 rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  required
                  className="mt-1 w-full rounded-lg border border-black/10 bg-white px-3 py-2 text-gray-900 placeholder:text-gray-400 focus:border-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900/10"
                  placeholder="Jane Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  required
                  className="mt-1 w-full rounded-lg border border-black/10 bg-white px-3 py-2 text-gray-900 placeholder:text-gray-400 focus:border-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900/10"
                  placeholder="jane@email.com"
                />
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                rows="4"
                className="mt-1 w-full rounded-lg border border-black/10 bg-white px-3 py-2 text-gray-900 placeholder:text-gray-400 focus:border-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900/10"
                placeholder="Tell me about your project"
              />
            </div>
            <button
              type="submit"
              className="mt-6 inline-flex items-center justify-center rounded-lg bg-gray-900 text-white px-5 py-3 text-sm font-medium shadow hover:bg-gray-800 transition"
            >
              Send message
              <Send className="ml-2" size={18} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
