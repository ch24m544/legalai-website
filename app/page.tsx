"use client";

import { useState } from "react";

export default function Home() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);

  const handleConsultation = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setMessage("");

    if (!name.trim()) {
      setMessage("Please enter your name.");
      return;
    }

    if (!phone.trim()) {
      setMessage("Please enter your phone number.");
      return;
    }

    if (!/^[6-9]\d{9}$/.test(phone)) {
      setMessage("Please enter a valid 10-digit Indian mobile number.");
      return;
    }

    try {
      setSending(true);

      const response = await fetch("/api/consultation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name.trim(),
          phone: phone.trim(),
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        setMessage(
          data.message || "Unable to send request."
        );
        return;
      }

      setMessage(
        "Thank you! Your consultation request has been sent. We will contact you shortly."
      );

      setName("");
      setPhone("");
    } catch (error) {
      console.error("Consultation error:", error);

      setMessage(
        "Unable to send your request. Please try again."
      );
    } finally {
      setSending(false);
    }
  };
  return (
    <main className="min-h-screen bg-white text-slate-900">

      {/* =====================================================
          NAVBAR
      ===================================================== */}

      <nav className="bg-white border-b border-slate-200">
        <div className="max-w-[1500px] mx-auto px-6 md:px-10">

          <div className="h-[82px] flex items-center justify-between">

            {/* Logo */}

            <a
              href="#home"
              className="text-2xl md:text-3xl font-bold text-blue-700"
            >
              ⚖ LegalAI
            </a>


            {/* Desktop Navigation */}

            <div className="hidden md:flex items-center gap-9">

              <a
                href="#home"
                className="text-slate-700 font-semibold hover:text-cyan-500 transition"
              >
                Home
              </a>

              <a
                href="#expertise"
                className="text-slate-700 font-semibold hover:text-cyan-500 transition"
              >
                Services
              </a>

              <a
                href="#consultation"
                className="text-slate-700 font-semibold hover:text-cyan-500 transition"
              >
                Contact Us
              </a>

              <a
                href="/dashboard"
                className="
                  px-5 py-2.5
                  rounded-lg
                  bg-blue-600
                  text-white
                  font-semibold
                  hover:bg-blue-700
                  transition
                "
              >
                Get Started
              </a>

            </div>


            {/* Mobile Menu Icon */}

            <button
              className="md:hidden text-2xl text-slate-700"
              aria-label="Open menu"
            >
              ☰
            </button>

          </div>

        </div>
      </nav>


      {/* =====================================================
          SECTION 1
          RAJASTHAN HIGH COURT
      ===================================================== */}

      <section
        id="home"
        className="
          w-full
          h-[200px]
          md:h-[800px]
          bg-slate-100
          overflow-hidden
        "
      >

        <img
          src="/lawyer-banner.png"
          alt="Rajasthan High Court and Legal Services"
          className="
            block
            h-auto
            w-full
            object-cover
            object-contain
          "
        />

      </section>


      {/* =====================================================
          SECTION 2
          CONSULTATION + CONTACT INFORMATION
      ===================================================== */}

      <section
        id="consultation"
        className="bg-slate-100 px-5 md:px-10 py-12 md:py-16"
      >

        
        <div
          className="
            max-w-[1250px]
            mx-auto
            bg-white
            rounded-[28px]
            shadow-md
            p-8
            md:p-12
          "
      >

          <div
            className="
              grid
              grid-cols-1
              md:grid-cols-2
              gap-10
              md:gap-14
              items-center
            "
          >

            {/* =================================================
                LEFT SIDE
                BOOK YOUR CONSULTATION
            ================================================= */}

            <div>

              <h2
                className="
                  text-3xl
                  md:text-4xl
                  font-bold
                  text-cyan-500
                "
              >
                Book your consultation
              </h2>


              <p
                className="
                  mt-2
                  text-base
                  md:text-lg
                  text-slate-800
                "
              >
                We call you in ~10 minutes and match you with
                your verified lawyer.
              </p>




              {/* Continue Button */}

              
              <form onSubmit={handleConsultation}>
                <input
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="
                    mt-6
                    w-full
                    h-[58px]
                    px-7
                    rounded-2xl
                    border
                    border-slate-300
                    bg-white
                    text-lg
                    text-slate-900
                    outline-none
                    placeholder:text-slate-500
                    focus:border-cyan-500
                    focus:ring-2
                    focus:ring-cyan-100
                  "
                />

                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={phone}
                  onChange={(e) =>
                    setPhone(e.target.value.replace(/\D/g, ""))
                  }
                  maxLength={10}
                  className="
                    mt-4
                    w-full
                    h-[58px]
                    px-7
                    rounded-2xl
                    border
                    border-slate-300
                    bg-white
                    text-lg
                    text-slate-900
                    outline-none
                    placeholder:text-slate-500
                    focus:border-cyan-500
                    focus:ring-2
                    focus:ring-cyan-100
                  "
                />

                <button
                  type="submit"
                  disabled={sending}
                  className="
                    mt-5
                    w-full
                    h-[60px]
                    rounded-full
                    bg-cyan-500
                    text-white
                    text-lg
                    font-bold
                    hover:bg-cyan-600
                    transition
                    disabled:opacity-60
                    disabled:cursor-not-allowed
                  "
                >
                  {sending ? "Sending..." : "Continue"}
                </button>

                {message && (
                  <p
                    className={`mt-4 text-center text-sm font-medium ${
                      message.startsWith("Thank you")
                        ? "text-green-600"
                        : "text-red-500"
                    }`}
                  >
                    {message}
                  </p>
                )}
              </form>


              {/* Free Access */}

              <p
                className="
                  mt-3
                  text-center
                  text-slate-700
                "
              >
                15-day free lawyer access post consultation.
              </p>


              {/* OR */}

              <div
                className="
                  flex
                  items-center
                  gap-4
                  my-6
                "
              >

                <div className="flex-1 h-px bg-slate-200"></div>

                <span className="text-slate-400 font-semibold">
                  OR
                </span>

                <div className="flex-1 h-px bg-slate-200"></div>

              </div>


              {/* WhatsApp */}

              <a
                href="https://wa.me/91XXXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  w-full
                  h-[60px]
                  rounded-full
                  border-2
                  border-green-500
                  flex
                  items-center
                  justify-center
                  gap-3
                  text-green-600
                  text-lg
                  font-bold
                  hover:bg-green-50
                  transition
                "
              >

                {/* WhatsApp Icon */}

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >

                  <path
                    d="M21 11.5a8.4 8.4 0 0 1-9 8.4
                       8.5 8.5 0 0 1-4.1-1.1L3 20l1.3-4.7
                       A8.4 8.4 0 1 1 21 11.5Z"
                  />

                  <path
                    d="M8.5 8.5c.2-.5.5-.5.8-.5h.6
                       c.2 0 .4.1.5.4l.7 1.6
                       c.1.2.1.4-.1.6l-.6.7
                       c-.1.1-.2.3-.1.5
                       .4.8 1 1.5 1.8 2
                       .2.1.4.1.5 0l.7-.7
                       c.2-.2.4-.2.6-.1l1.6.8
                       c.2.1.3.3.5.3.5v.6
                       c0 .3-.1.6-.5.8
                       -.4.2-1 .3-1.6.1
                       -1.1-.3-2.2-.9-3.1-1.8
                       -.9-.9-1.6-2-1.9-3.1
                       -.2-.7-.1-1.3.1-1.8Z"
                  />

                </svg>

                Talk directly on WhatsApp

              </a>


              <p
                className="
                  mt-3
                  text-center
                  text-slate-500
                "
              >
                Get Instant replies.
              </p>

            </div>


            {/* =================================================
                RIGHT SIDE
                CONTACT INFORMATION
            ================================================= */}

            <div
              className="
                md:border-l
                md:border-slate-200
                md:pl-12
              "
            >

              {/* Contact Heading */}

              <div
                className="
                  text-cyan-500
                  font-semibold
                  text-sm
                  mb-3
                "
              >
                CONTACT US
              </div>


              <h3
                className="
                  text-3xl
                  md:text-4xl
                  font-bold
                  text-slate-900
                "
              >
                Get in touch
              </h3>


              <p
                className="
                  mt-4
                  text-slate-600
                  leading-relaxed
                  max-w-md
                "
              >
                Have a legal question or need professional
                assistance? Our team is here to help you connect
                with the right legal professional.
              </p>


              {/* =================================================
                  CONTACT DETAILS
              ================================================= */}

              <div className="mt-8 space-y-6">


                {/* Phone */}

                <div className="flex items-start gap-4">

                  <div
                    className="
                      w-11
                      h-11
                      shrink-0
                      rounded-full
                      bg-cyan-50
                      flex
                      items-center
                      justify-center
                      text-xl
                    "
                  >
                    📞
                  </div>

                  <div>

                    <div className="font-semibold text-slate-900">
                      Phone
                    </div>

                    <div className="mt-1 text-slate-600">
                      +91 XXXXX XXXXX
                    </div>

                  </div>

                </div>


                {/* Email */}

                <div className="flex items-start gap-4">

                  <div
                    className="
                      w-11
                      h-11
                      shrink-0
                      rounded-full
                      bg-cyan-50
                      flex
                      items-center
                      justify-center
                      text-xl
                    "
                  >
                    ✉
                  </div>

                  <div>

                    <div className="font-semibold text-slate-900">
                      Email
                    </div>

                    <div className="mt-1 text-slate-600">
                      contact@legalai.in
                    </div>

                  </div>

                </div>


                {/* Office */}

                <div className="flex items-start gap-4">

                  <div
                    className="
                      w-11
                      h-11
                      shrink-0
                      rounded-full
                      bg-cyan-50
                      flex
                      items-center
                      justify-center
                      text-xl
                    "
                  >
                    📍
                  </div>

                  <div>

                    <div className="font-semibold text-slate-900">
                      Office
                    </div>

                    <div className="mt-1 text-slate-600">
                      Rajasthan, India
                    </div>

                  </div>

                </div>


                {/* Availability */}

                <div className="flex items-start gap-4">

                  <div
                    className="
                      w-11
                      h-11
                      shrink-0
                      rounded-full
                      bg-cyan-50
                      flex
                      items-center
                      justify-center
                      text-xl
                    "
                  >
                    🕒
                  </div>

                  <div>

                    <div className="font-semibold text-slate-900">
                      Availability
                    </div>

                    <div className="mt-1 text-slate-600">
                      Monday – Saturday
                    </div>

                  </div>

                </div>

              </div>


              {/* =================================================
                  TRUST MESSAGE
              ================================================= */}

              <div
                className="
                  mt-8
                  p-5
                  rounded-2xl
                  bg-slate-50
                  border
                  border-slate-200
                "
              >

                <div
                  className="
                    font-semibold
                    text-slate-900
                  "
                >
                  ⚖ Trusted Legal Assistance
                </div>

                <p
                  className="
                    mt-2
                    text-sm
                    text-slate-600
                  "
                >
                  Connect with experienced legal professionals
                  for your legal needs.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          SECTION 3
          OUR LEGAL EXPERTISE
      ===================================================== */}

      <section
        id="expertise"
        className="
          bg-white
          px-4
          py-14
          md:py-16
        "
      >

        <div className="max-w-[1650px] mx-auto">


          {/* Section Heading */}

          <div className="text-center mb-12">

            <h2
              className="
                text-3xl
                md:text-4xl
                font-bold
              "
            >

              <span className="text-slate-900">
                Our Legal
              </span>{" "}

              <span className="text-cyan-500">
                Expertise
              </span>

            </h2>

          </div>


          {/* =================================================
              EXPERTISE CARDS
          ================================================= */}

          <div
            className="
              grid
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-3
              xl:grid-cols-6
              gap-6
            "
          >


            {/* =================================================
                DIVORCE
            ================================================= */}

            <div
              className="
                overflow-hidden
                rounded-2xl
                bg-white
                shadow-lg
                border
                border-slate-100
                hover:-translate-y-1
                hover:shadow-xl
                transition
              "
            >

              <img
                src="/expertise-divorce.png"
                alt="Divorce legal services"
                className="
                  w-full
                  aspect-square
                  object-cover
                "
              />

              <div
                className="
                  min-h-[80px]
                  bg-slate-700
                  px-3
                  flex
                  items-center
                  justify-center
                  text-center
                  text-white
                  font-bold
                  text-base
                  md:text-lg
                "
              >
                DIVORCE
              </div>

            </div>


            {/* =================================================
                FAMILY DISPUTES
            ================================================= */}

            <div
              className="
                overflow-hidden
                rounded-2xl
                bg-white
                shadow-lg
                border
                border-slate-100
                hover:-translate-y-1
                hover:shadow-xl
                transition
              "
            >

              <img
                src="/expertise-family.png"
                alt="Family dispute legal services"
                className="
                  w-full
                  aspect-square
                  object-cover
                "
              />

              <div
                className="
                  min-h-[80px]
                  bg-slate-700
                  px-3
                  flex
                  items-center
                  justify-center
                  text-center
                  text-white
                  font-bold
                  text-base
                  md:text-lg
                "
              >
                FAMILY DISPUTES
              </div>

            </div>


            {/* =================================================
                REAL ESTATE
            ================================================= */}

            <div
              className="
                overflow-hidden
                rounded-2xl
                bg-white
                shadow-lg
                border
                border-slate-100
                hover:-translate-y-1
                hover:shadow-xl
                transition
              "
            >

              <img
                src="/expertise-real-estate.png"
                alt="Real estate legal services"
                className="
                  w-full
                  aspect-square
                  object-cover
                "
              />

              <div
                className="
                  min-h-[80px]
                  bg-slate-700
                  px-3
                  flex
                  items-center
                  justify-center
                  text-center
                  text-white
                  font-bold
                  text-base
                  md:text-lg
                "
              >
                REAL ESTATE MATTERS
              </div>

            </div>


            {/* =================================================
                WORKPLACE
            ================================================= */}

            <div
              className="
                overflow-hidden
                rounded-2xl
                bg-white
                shadow-lg
                border
                border-slate-100
                hover:-translate-y-1
                hover:shadow-xl
                transition
              "
            >

              <img
                src="/expertise-workplace.png"
                alt="Workplace and labour rights"
                className="
                  w-full
                  aspect-square
                  object-cover
                "
              />

              <div
                className="
                  min-h-[80px]
                  bg-slate-700
                  px-3
                  flex
                  items-center
                  justify-center
                  text-center
                  text-white
                  font-bold
                  text-base
                  md:text-lg
                "
              >
                WORKPLACE & LABOUR RIGHTS
              </div>

            </div>


            {/* =================================================
                AGREEMENTS
            ================================================= */}

            <div
              className="
                overflow-hidden
                rounded-2xl
                bg-white
                shadow-lg
                border
                border-slate-100
                hover:-translate-y-1
                hover:shadow-xl
                transition
              "
            >

              <img
                src="/expertise-agreements.png"
                alt="Agreements and paperwork"
                className="
                  w-full
                  aspect-square
                  object-cover
                "
              />

              <div
                className="
                  min-h-[80px]
                  bg-slate-700
                  px-3
                  flex
                  items-center
                  justify-center
                  text-center
                  text-white
                  font-bold
                  text-base
                  md:text-lg
                "
              >
                AGREEMENTS & PAPERWORK
              </div>

            </div>


            {/* =================================================
                ONLINE FRAUD
            ================================================= */}

            <div
              className="
                overflow-hidden
                rounded-2xl
                bg-white
                shadow-lg
                border
                border-slate-100
                hover:-translate-y-1
                hover:shadow-xl
                transition
              "
            >

              <img
                src="/expertise-fraud.png"
                alt="Online fraud and consumer complaints"
                className="
                  w-full
                  aspect-square
                  object-cover
                "
              />

              <div
                className="
                  min-h-[80px]
                  bg-slate-700
                  px-3
                  flex
                  items-center
                  justify-center
                  text-center
                  text-white
                  font-bold
                  text-base
                  md:text-lg
                "
              >
                ONLINE FRAUD & CONSUMER COMPLAINTS
              </div>

            </div>


          </div>

        </div>

      </section>


      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer
        className="
          bg-slate-900
          text-white
          py-8
          px-6
        "
      >

        <div
          className="
            max-w-7xl
            mx-auto
            flex
            flex-col
            md:flex-row
            items-center
            justify-between
            gap-4
          "
        >

          <div
            className="
              text-xl
              font-bold
              text-blue-400
            "
          >
            ⚖ LegalAI
          </div>


          <p className="text-sm text-slate-400">
            AI-powered legal practice management.
          </p>


          <p className="text-sm text-slate-500">
            © 2026 LegalAI
          </p>

        </div>

      </footer>

    </main>
  );
}