import { useState } from "react";
import Flourish from "./Flourish";
import { toast } from "sonner";

const ReservationSection = () => {
  const [form, setForm] = useState({
    name: "", phone: "", email: "", date: "", time: "", guests: "2", message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Reservation request submitted! We'll contact you shortly.");
    setForm({ name: "", phone: "", email: "", date: "", time: "", guests: "2", message: "" });
  };

  const inputClasses =
    "w-full bg-input border border-border text-foreground px-4 py-3 font-body text-base focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors placeholder:text-muted-foreground";

  return (
    <section id="reservation" className="bg-charcoal-deep section-padding">
      <div className="container mx-auto max-w-2xl">
        <div className="text-center mb-16">
          <p className="font-display text-xs tracking-[0.4em] text-primary/60 uppercase mb-4">Join Us</p>
          <h2 className="font-display text-3xl md:text-5xl tracking-[0.15em] gold-gradient-text mb-6">
            Reserve a Table
          </h2>
          <Flourish size="sm" />
        </div>
        <form onSubmit={handleSubmit} className="space-y-5 border border-border/50 p-6 md:p-10 bg-card/50">
          <input
            type="text"
            placeholder="Full Name"
            required
            maxLength={100}
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className={inputClasses}
          />
          <div className="grid sm:grid-cols-2 gap-5">
            <input
              type="tel"
              placeholder="Phone Number"
              required
              maxLength={20}
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className={inputClasses}
            />
            <input
              type="email"
              placeholder="Email Address"
              required
              maxLength={255}
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className={inputClasses}
            />
          </div>
          <div className="grid sm:grid-cols-3 gap-5">
            <input
              type="date"
              required
              value={form.date}
              onChange={(e) => setForm({ ...form, date: e.target.value })}
              className={inputClasses}
            />
            <input
              type="time"
              required
              value={form.time}
              onChange={(e) => setForm({ ...form, time: e.target.value })}
              className={inputClasses}
            />
            <select
              value={form.guests}
              onChange={(e) => setForm({ ...form, guests: e.target.value })}
              className={inputClasses}
            >
              {[1, 2, 3, 4, 5, 6, 7, 8, 10, 12, 15, 20].map((n) => (
                <option key={n} value={n}>{n} Guest{n > 1 ? "s" : ""}</option>
              ))}
            </select>
          </div>
          <textarea
            placeholder="Special Requests (optional)"
            rows={3}
            maxLength={1000}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className={inputClasses}
          />
          <button
            type="submit"
            className="w-full gold-gradient-bg text-primary-foreground font-display text-sm tracking-[0.2em] uppercase py-4 hover:opacity-90 transition-opacity"
          >
            Request Reservation
          </button>
        </form>
      </div>
    </section>
  );
};

export default ReservationSection;
