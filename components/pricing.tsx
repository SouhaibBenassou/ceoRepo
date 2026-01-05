import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

const plans = [
  {
    name: "Starter",
    price: "$299",
    description: "Perfect for short-form content and social media videos.",
    features: [
      "Up to 5 minutes final cut",
      "2 revision rounds",
      "Basic color correction",
      "Stock music included",
      "48-hour turnaround",
    ],
    popular: false,
  },
  {
    name: "Professional",
    price: "$599",
    description: "Ideal for YouTube, branded content, and marketing videos.",
    features: [
      "Up to 15 minutes final cut",
      "Unlimited revisions",
      "Advanced color grading",
      "Custom motion graphics",
      "Sound design & mixing",
      "24-hour turnaround",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For agencies and high-volume production needs.",
    features: [
      "Unlimited video length",
      "Dedicated editor",
      "Priority support",
      "Multi-platform delivery",
      "Raw project files",
      "Monthly retainer options",
    ],
    popular: false,
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="py-20 md:py-32 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Simple, transparent pricing</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Choose the plan that fits your project. No hidden fees, no surprises.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative p-8 rounded-xl border bg-card ${
                plan.popular ? "border-accent shadow-lg scale-105" : "border-border"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-accent text-accent-foreground text-xs font-medium px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}
              <div className="text-center mb-8">
                <h3 className="text-lg font-semibold mb-2">{plan.name}</h3>
                <div className="text-4xl font-bold">{plan.price}</div>
                {plan.price !== "Custom" && <span className="text-sm text-muted-foreground">/project</span>}
                <p className="mt-4 text-sm text-muted-foreground">{plan.description}</p>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                className={`w-full ${
                  plan.popular
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                Get Started
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
