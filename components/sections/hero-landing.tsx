import Image from "next/image";
import mainBg from "@/assets/mainbg.png";

export default async function HeroLanding() {
  return (
    <section className="space-y-2 pt-12 sm:pb-5 sm:pt-20 lg:pt-20">
      <div className="container flex max-w-5xl flex-col items-center gap-5 text-center">
        <h1 className="text-balance font-urban text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-[66px]">
          Your Coding Journey Starts Here
          <br />
          <span>with </span>
          <span className="text-gradient_indigo-purple font-extrabold">
            Personalized Plan
          </span>
        </h1>

        <p
          className="max-w-2xl text-balance leading-normal text-muted-foreground sm:text-xl sm:leading-8"
          style={{ animationDelay: "0.35s", animationFillMode: "forwards" }}
        >
          I get it! learning to code can be overwhelming. I’m here to guide you
          from the basics to job-ready skills with a plan that fits your life.
          Real projects, real support, and no wasted time.
        </p>
      </div>
      <div className="flex justify-center">
        <Image
          className="object-cover object-center dark:opacity-85 dark:invert"
          src={mainBg}
          alt="preview landing"
          width={800}
          height={800}
        />
      </div>
    </section>
  );
}
