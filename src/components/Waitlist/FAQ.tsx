/* eslint-disable tailwindcss/migration-from-tailwind-2 */
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function FAQ() {
  return (
    <div className="w-full max-w-3xl space-y-6">
      <h2 className="text-center text-3xl font-bold">
        Frequently Asked Questions
      </h2>
      <Accordion type="single" collapsible className="space-y-4">
        <AccordionItem value="item-1">
          <AccordionTrigger className="flex items-center justify-between rounded-md bg-background px-4 py-3 text-lg font-medium transition-colors hover:bg-muted focus:outline-none focus-visible:ring focus-visible:ring-primary focus-visible:ring-opacity-75">
            <span>What is the return policy?</span>
            <div className="size-5 text-muted-foreground" />
          </AccordionTrigger>
          <AccordionContent className="px-4 pb-6 pt-4 text-muted-foreground">
            <p>
              We offer a 30-day return policy on all of our products. If
              you&apos;re not satisfied with your purchase, you can return it
              for a full refund within 30 days of delivery.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="flex items-center justify-between rounded-md bg-background px-4 py-3 text-lg font-medium transition-colors hover:bg-muted focus:outline-none focus-visible:ring focus-visible:ring-primary focus-visible:ring-opacity-75">
            <span>How do I track my order?</span>
            <div className="size-5 text-muted-foreground" />
          </AccordionTrigger>
          <AccordionContent className="px-4 pb-6 pt-4 text-muted-foreground">
            <p>
              You can track your order by logging into your account on our
              website and navigating to the &quot;Orders&quot; section. There,
              you&apos;ll find the status of your order and a tracking number
              you can use to check the delivery status.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="flex items-center justify-between rounded-md bg-background px-4 py-3 text-lg font-medium transition-colors hover:bg-muted focus:outline-none focus-visible:ring focus-visible:ring-primary focus-visible:ring-opacity-75">
            <span>Do you offer international shipping?</span>
            <div className="size-5 text-muted-foreground" />
          </AccordionTrigger>
          <AccordionContent className="px-4 pb-6 pt-4 text-muted-foreground">
            <p>
              Yes, we offer international shipping to most countries. Shipping
              rates and delivery times may vary depending on the destination.
              Please check the shipping information on our website or contact
              our customer support team for more details.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger className="flex items-center justify-between rounded-md bg-background px-4 py-3 text-lg font-medium transition-colors hover:bg-muted focus:outline-none focus-visible:ring focus-visible:ring-primary focus-visible:ring-opacity-75">
            <span>What payment methods do you accept?</span>
            <div className="size-5 text-muted-foreground" />
          </AccordionTrigger>
          <AccordionContent className="px-4 pb-6 pt-4 text-muted-foreground">
            <p>
              We accept a variety of payment methods, including credit/debit
              cards, PayPal, and Apple Pay. You can securely checkout using your
              preferred payment method on our website.
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}
