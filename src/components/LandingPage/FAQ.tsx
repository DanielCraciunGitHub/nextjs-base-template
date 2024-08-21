import Link from "next/link"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { siteConfig } from "@/config/next-inject"

interface FaqProps {}

export const FAQ = ({}: FaqProps) => {
  return (
    <div id="faq">
      <div className="mx-auto my-24 flex max-w-6xl flex-col space-y-6 lg:flex-row lg:gap-36 lg:space-y-0">
        <div className="shrink-0">
          <div className="w-full text-center text-xl font-bold tracking-tight text-white md:text-start md:text-3xl">
            Frequently Asked Questions
          </div>
          <div className="mt-2">
            <p className="font-bold">Have another question?</p>
            Please do not hesitate to contact us by{" "}
            <Link
              rel="noopener noreferrer"
              className="text-blue-500 underline"
              href={`mailto:${siteConfig.email}`}
            >
              email
            </Link>{" "}
          </div>
        </div>
        <Accordion type="single" collapsible className="mx-4 md:mx-0 md:w-full">
          {faq.map((q) => (
            <AccordionItem key={q.questionName} value={q.questionName}>
              <AccordionTrigger className="text-start">
                {q.questionName}
              </AccordionTrigger>
              <AccordionContent>{q.acceptedAnswerText}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  )
}
export const faq = [
  {
    questionName: "What is Next Inject?",
    acceptedAnswerText:
      "Next Inject is a website that showcases plugins for Next.js applications. Next Inject also comes with a CLI used to inject plugins to configure your Next.js app. (e.g. Stripe, Auth.js)",
  },
  {
    questionName: "How do we compare to shipfast?",
    acceptedAnswerText:
      "Shipfast is a boilerplate repository which contains many useful components but at a hefty price. Next Inject solves the hefty price issue and simultaneously promotes freedom of choice; i.e. you are not forced to use MongoDB!",
  },
  {
    questionName: "How do I install a plugin with Next Inject?",
    acceptedAnswerText:
      "Run `next-inject add [plugin]` to configure the desired plugin in your Next.js application.",
  },
  {
    questionName: "What types of plugins are available on Next Inject?",
    acceptedAnswerText:
      "Next Inject offers a variety of plugins for different integrations such as metadata, SEO, analytics, Stripe, e-commerce, authentication, and more.",
  },
  {
    questionName: "Is Next Inject compatible existing Next.js projects?",
    acceptedAnswerText:
      "Next Inject is 100% compatible with our base Next.js template, and we are incrementally supporting existing Next.js projects.",
  },
] as const
