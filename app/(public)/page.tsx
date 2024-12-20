import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  CheckCircle,
  LayoutDashboard,
  MessageSquare,
  Clock,
  Users,
  Zap,
  Mail,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const features = [
  {
    icon: MessageSquare,
    title: "AI-Powered Responses",
    description:
      "Automatically generate intelligent responses to comments and messages.",
  },
  {
    icon: Clock,
    title: "Time-Saving Automation",
    description:
      "Save hours with automated engagement and response management.",
  },
  {
    icon: Users,
    title: "Audience Growth",
    description:
      "Expand your reach with consistent and meaningful interactions.",
  },
  {
    icon: Zap,
    title: "Instant Engagement",
    description:
      "Respond to your audience instantly, 24/7 without manual intervention.",
  },
];

const stats = [
  {
    number: "10k+",
    label: "Active Users",
    description: "Trusted by thousands of creators",
  },
  {
    number: "2M+",
    label: "Automated Responses",
    description: "Messages handled automatically",
  },
  {
    number: "85%",
    label: "Time Saved",
    description: "Average time saved by users",
  },
  {
    number: "24/7",
    label: "Availability",
    description: "Round-the-clock automation",
  },
];

const testimonials = [
  {
    quote:
      "Slide has transformed how I manage my online presence. The AI responses are incredibly natural.",
    author: "Sarah Johnson",
    role: "Content Creator",
  },
  {
    quote:
      "The automation features have saved me countless hours. It's like having a full-time assistant.",
    author: "Mike Chen",
    role: "Digital Marketer",
  },
];

const plans = [
  {
    name: "Free Plan",
    description: "Perfect for getting started",
    price: "$0",
    features: [
      "Set up auto replies",
      "Answer questions with AI",
      "Basic analytics",
    ],
    cta: "Get Started",
  },
  {
    name: "Pro Plan",
    description: "Advanced features for power users",
    price: "$99",
    features: [
      "All features from Free Plan",
      "Advanced AI-powered responses",
      "Detailed analytics and insights",
      "Priority customer support",
      "Custom branding options",
    ],
    cta: "Upgrade Now",
  },
];

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-blue-900 to-background">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e3a8a_1px,transparent_1px),linear-gradient(to_bottom,#1e3a8a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
        <div className="relative">
          <div className="container px-4 py-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                  <LayoutDashboard className="h-5 w-5 text-primary-foreground" />
                </div>
                <span className="text-xl font-semibold text-primary-foreground">
                  Slide
                </span>
              </div>
              <nav className="hidden space-x-6 text-sm text-blue-200 md:block">
                <Link href="#features">Features</Link>
                <Link href="#how-it-works">How It Works</Link>
                <Link href="#pricing">Pricing</Link>
              </nav>
              <Button asChild>
                <Link href="/dashboard">Login</Link>
              </Button>
            </div>

            <div className="mx-auto mt-16 max-w-3xl text-center">
              <h1 className="text-4xl font-bold leading-tight tracking-tighter text-primary-foreground sm:text-5xl md:text-6xl lg:text-7xl">
                Automate Your Web Engagement
              </h1>

              <p className="mt-6 text-lg text-blue-200">
                Revolutionize how you manage your web automation and boost your
                productivity and engagement effortlessly.
              </p>

              <div className="mt-8 flex justify-center gap-4">
                <Button size="lg" asChild>
                  <Link href="/dashboard">Get Started</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-blue-400 hover:bg-blue-900/50"
                >
                  Learn More
                </Button>
              </div>
            </div>
            <div className="relative h-40 md:h-80 w-full mt-10">
              <Image
                src="/placeholder.svg"
                alt="Dashboard preview"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container py-32">
        <div className="text-center max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Powerful Features
          </h2>
          <p className="mt-4 text-xl text-muted-foreground">
            Everything you need to automate your web engagement
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 mt-20 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="border-primary/20 bg-gradient-to-br from-primary/5 via-background to-background"
            >
              <CardHeader>
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="container py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background -z-10" />
        <div className="text-center max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            How It Works
          </h2>
          <p className="mt-4 text-xl text-muted-foreground">
            Get started in minutes, not hours
          </p>
        </div>
        <div className="mt-20 grid grid-cols-1 gap-12 md:grid-cols-3">
          {[
            {
              step: "1",
              title: "Connect Your Account",
              description: "Link your accounts and customize your preferences",
            },
            {
              step: "2",
              title: "Set Up Automation",
              description:
                "Define your automation rules and AI response patterns",
            },
            {
              step: "3",
              title: "Watch It Grow",
              description: "Monitor your engagement and adjust as needed",
            },
          ].map((item, index) => (
            <div key={index} className="relative">
              <div className="absolute -left-8 -top-8 text-8xl font-bold text-primary/10">
                {item.step}
              </div>
              <Card className="border-primary/20 bg-gradient-to-br from-primary/5 via-background to-background h-36">
                <CardHeader>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="container py-32">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="relative overflow-hidden border-primary/20 bg-gradient-to-br from-primary/5 via-primary/5 to-background"
            >
              <CardHeader className="pb-2">
                <div className="absolute -right-4 -top-4 opacity-10">
                  <div className="text-[120px] font-bold text-primary">
                    {typeof stat.number === "string" &&
                    !stat.number.includes("+")
                      ? stat.number.split("").shift()
                      : stat.number.replace("+", "")}
                  </div>
                </div>
                <CardTitle className="text-4xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                  {stat.number}
                </CardTitle>
                <CardDescription className="text-lg font-semibold text-foreground">
                  {stat.label}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {stat.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="container py-32">
        <div className="text-center max-w-3xl mx-auto px-4 mb-20">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            What Our Users Say
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:px-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="border-primary/20 bg-gradient-to-br from-primary/5 via-background to-background"
            >
              <CardHeader>
                <CardContent className="pt-4 relative">
                  <div className="absolute -top-2 -left-2 text-6xl text-primary/10">
                    &quot;
                  </div>
                  <p className="text-lg relative z-10 pt-4">
                    {testimonial.quote}
                  </p>
                  <div className="mt-6 flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-primary/10" />
                    <div>
                      <p className="font-semibold">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="container py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Choose Your Plan
          </h2>
          <p className="mt-4 text-muted-foreground">
            Select the perfect plan to boost your productivity
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className="flex flex-col justify-between border-primary/20"
            >
              <CardHeader>
                <CardTitle>{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="grid gap-4">
                <div className="text-4xl font-bold">
                  {plan.price}
                  <span className="text-lg font-normal text-muted-foreground">
                    /month
                  </span>
                </div>
                <ul className="space-y-2">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                      <span className="text-sm text-muted-foreground">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full">{plan.cta}</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="border-t border-primary/20">
        <div className="container py-24">
          <div className="flex flex-col items-center justify-center text-center">
            <Mail className="h-12 w-12 text-primary mb-4" />
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Stay Updated
            </h2>
            <p className="mt-4 mb-8 text-muted-foreground max-w-[600px]">
              Subscribe to our newsletter for the latest features, tips, and
              updates.
            </p>
            <div className="flex w-full max-w-sm items-center space-x-2">
              <Input type="email" placeholder="Enter your email" />
              <Button type="submit">Subscribe</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-primary/20">
        <div className="container py-16">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div>
              <h3 className="text-lg font-semibold mb-4">Product</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#features"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    href="#pricing"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Documentation
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-primary"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Careers
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Community
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Partners
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Terms
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-16 pt-8 border-t border-primary/20">
            <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                  <LayoutDashboard className="h-5 w-5 text-primary-foreground" />
                </div>
                <span className="text-xl font-semibold">Slide</span>
              </div>
              <p className="text-sm text-muted-foreground">
                © 2024 Slide. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
