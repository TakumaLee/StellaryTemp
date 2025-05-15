import Link from "next/link";
import { MainLayout } from "@/components/layout/main-layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlusCircle, Edit, Trash2, FileImage as ComicIcon } from "lucide-react";
import Image from "next/image";

const placeholderComics = [
  { id: "comic-1", title: "Stellar Cadets", status: "Ongoing", chapters: 5, lastUpdated: "2024-07-25", coverImage: "https://placehold.co/150x225.png?text=Comic+A", dataAiHint: "space adventure" },
  { id: "comic-2", title: "The Last Dragon Slayer", status: "Completed", chapters: 20, lastUpdated: "2024-01-15", coverImage: "https://placehold.co/150x225.png?text=Comic+B", dataAiHint: "fantasy comic" },
];

export default function MyComicsPage() {
  return (
    <MainLayout>
      <div className="container mx-auto py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">My Comics</h1>
            <p className="text-muted-foreground">Manage your visual narratives.</p>
          </div>
          <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <Link href="/comics/upload">
              <PlusCircle className="mr-2 h-5 w-5" /> Upload New Comic
            </Link>
          </Button>
        </div>

        {placeholderComics.length === 0 ? (
           <Card className="text-center py-12 shadow-md">
            <CardHeader>
              <ComicIcon className="mx-auto h-16 w-16 text-muted-foreground mb-4" />
              <CardTitle>No Comics Yet</CardTitle>
              <CardDescription>Start sharing your visual stories by uploading your first comic.</CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild size="lg">
                <Link href="/comics/upload">Upload Your First Comic</Link>
              </Button>
            </CardContent>
          </Card>
        ) : (
          <div className="grid gap-6">
            {placeholderComics.map((comic) => (
              <Card key={comic.id} className="shadow-lg hover:shadow-xl transition-shadow flex flex-col md:flex-row">
                <div className="md:w-1/4 relative aspect-video md:aspect-[2/3] overflow-hidden rounded-t-lg md:rounded-l-lg md:rounded-tr-none">
                   <Image src={comic.coverImage} alt={comic.title} layout="fill" objectFit="cover" data-ai-hint={comic.dataAiHint} />
                </div>
                <div className="flex-1">
                  <CardHeader>
                    <CardTitle className="text-xl hover:text-accent transition-colors">
                       {/* Link to a comic viewer/editor page in future */}
                      <Link href={`/comics/view/${comic.id}`}>{comic.title}</Link>
                    </CardTitle>
                    <CardDescription>
                      Status: <span className="font-medium text-primary">{comic.status}</span> | Chapters: {comic.chapters} | Last Updated: {comic.lastUpdated}
                    </CardDescription>
                  </CardHeader>
                  <CardFooter className="flex justify-end gap-2 pt-0 pb-4 px-6">
                    <Button variant="outline" size="sm" asChild>
                       {/* Link to a comic editor page in future */}
                      <Link href={`/comics/edit/${comic.id}`}>
                        <Edit className="mr-2 h-4 w-4" /> Manage
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
