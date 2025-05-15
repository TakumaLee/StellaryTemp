import Link from "next/link";
import { MainLayout } from "@/components/layout/main-layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlusCircle, Edit, Trash2, BookText } from "lucide-react";
import Image from "next/image";

const placeholderNovels = [
  { id: "novel-1", title: "The Quantum Thief", status: "Ongoing", chapters: 15, lastUpdated: "2024-07-20", coverImage: "https://placehold.co/150x225.png?text=Novel+1", dataAiHint: "sci-fi cover" },
  { id: "novel-2", title: "Chronicles of the Ancient Oak", status: "Completed", chapters: 50, lastUpdated: "2023-12-01", coverImage: "https://placehold.co/150x225.png?text=Novel+2", dataAiHint: "fantasy book" },
  { id: "novel-3", title: "Project Nightfall", status: "Draft", chapters: 3, lastUpdated: "2024-07-28", coverImage: "https://placehold.co/150x225.png?text=Novel+3", dataAiHint: "thriller novel" },
];

export default function MyNovelsPage() {
  return (
    <MainLayout>
      <div className="container mx-auto py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">My Novels</h1>
            <p className="text-muted-foreground">Manage your literary creations.</p>
          </div>
          <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <Link href="/editor/new">
              <PlusCircle className="mr-2 h-5 w-5" /> Create New Novel
            </Link>
          </Button>
        </div>

        {placeholderNovels.length === 0 ? (
          <Card className="text-center py-12 shadow-md">
            <CardHeader>
              <BookText className="mx-auto h-16 w-16 text-muted-foreground mb-4" />
              <CardTitle>No Novels Yet</CardTitle>
              <CardDescription>Start your writing journey by creating your first novel.</CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild size="lg">
                <Link href="/editor/new">Create Your First Novel</Link>
              </Button>
            </CardContent>
          </Card>
        ) : (
          <div className="grid gap-6">
            {placeholderNovels.map((novel) => (
              <Card key={novel.id} className="shadow-lg hover:shadow-xl transition-shadow flex flex-col md:flex-row">
                <div className="md:w-1/4 relative aspect-video md:aspect-[2/3] overflow-hidden rounded-t-lg md:rounded-l-lg md:rounded-tr-none">
                  <Image src={novel.coverImage} alt={novel.title} layout="fill" objectFit="cover" data-ai-hint={novel.dataAiHint}/>
                </div>
                <div className="flex-1">
                  <CardHeader>
                    <CardTitle className="text-xl hover:text-accent transition-colors">
                      <Link href={`/editor/${novel.id}`}>{novel.title}</Link>
                    </CardTitle>
                    <CardDescription>
                      Status: <span className="font-medium text-primary">{novel.status}</span> | Chapters: {novel.chapters} | Last Updated: {novel.lastUpdated}
                    </CardDescription>
                  </CardHeader>
                  <CardFooter className="flex justify-end gap-2 pt-0 pb-4 px-6">
                    <Button variant="outline" size="sm" asChild>
                      <Link href={`/editor/${novel.id}`}>
                        <Edit className="mr-2 h-4 w-4" /> Edit
                      </Link>
                    </Button>
                    <Button variant="destructive" size="sm">
                      <Trash2 className="mr-2 h-4 w-4" /> Delete
                    </Button>
                  </CardFooter>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </MainLayout>
  );
}
