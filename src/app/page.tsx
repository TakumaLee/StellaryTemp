import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, BookOpenText, Edit3, UploadCloudIcon, Users } from "lucide-react";
import { MainLayout } from "@/components/layout/main-layout";


const features = [
  {
    icon: Edit3,
    title: "Collaborative Editor",
    description: "Real-time markdown editor with automatic saving for writers and editors.",
    link: "/editor/new",
    linkText: "Start Writing",
  },
  {
    icon: UploadCloudIcon,
    title: "Manga Upload",
    description: "Simple uploader for comic creators to share their work with the world.",
    link: "/comics/upload",
    linkText: "Upload Comic",
  },
  {
    icon: BookOpenText,
    title: "Content Viewer",
    description: "Immersive reader interface for viewing stories and comics.",
    link: "/library",
    linkText: "Browse Library",
  },
  {
    icon: Users,
    title: "Community & Monetization",
    description: "Connect with readers, get feedback, and monetize your creations.",
    link: "/#", // Link to future community/monetization info section
    linkText: "Learn More",
  },
];

export default function HomePage() {
  return (
    <MainLayout>
      <div className="flex flex-col items-center">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-br from-background to-secondary/50 rounded-lg shadow-lg">
          <div className="container px-4 md:px-6 text-center">
            <div className="flex flex-col items-center space-y-6">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-secondary-foreground">
                Stellary - 星の書庫
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Craft, share, and discover captivating stories and comics. Your universe of creativity awaits.
              </p>
              <div className="space-x-4">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  <Link href="/editor/new">
                    Start Creating <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/library">
                    Explore Library <BookOpenText className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Key Features</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Everything You Need to Shine</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Stellary provides powerful tools for creators and an engaging experience for readers.
              </p>
            </div>
            <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-2">
              {features.map((feature) => (
                <Card key={feature.title} className="hover:shadow-xl transition-shadow duration-300">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-4">
                      <feature.icon className="h-10 w-10 text-accent" />
                      <CardTitle className="text-2xl">{feature.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-4">{feature.description}</CardDescription>
                    <Button variant="link" asChild className="p-0 text-accent hover:text-accent/80">
                      <Link href={feature.link}>
                        {feature.linkText} <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Ready to Join the Stellary Universe?
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Whether you're a writer, artist, editor, or reader, your next adventure starts here.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              {/* Placeholder for newsletter or registration form */}
              <Button asChild size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                <Link href="/signin">Sign Up Now</Link>
              </Button>
              <p className="text-xs text-muted-foreground">
                Join our community and start your creative journey.
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="w-full py-8 border-t">
            <div className="container text-center text-sm text-muted-foreground">
                © {new Date().getFullYear()} Stellary - 星の書庫. All rights reserved.
            </div>
        </footer>
      </div>
    </MainLayout>
  );
}
