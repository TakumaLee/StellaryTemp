import Image from "next/image";
import Link from "next/link";
import { MainLayout } from "@/components/layout/main-layout";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Filter, Star, BookOpen } from "lucide-react";
import { Label } from "@/components/ui/label";

const placeholderContent = [
  { id: "1", type: "Novel", title: "The Cosmic Labyrinth", author: "Jane Stellaris", genre: "Sci-Fi", image: "https://placehold.co/300x450.png?text=Novel+1", dataAiHint: "book cover" },
  { id: "2", type: "Comic", title: "Chronicles of Astra", author: "Alex Comet", genre: "Fantasy", image: "https://placehold.co/300x450.png?text=Comic+1", dataAiHint: "comic art" },
  { id: "3", type: "Novel", title: "Whispers of the Void", author: "Sam Nebula", genre: "Horror", image: "https://placehold.co/300x450.png?text=Novel+2", dataAiHint: "dark fantasy" },
  { id: "4", type: "Comic", title: "Galaxy Wanderers", author: "Kim Orion", genre: "Adventure", image: "https://placehold.co/300x450.png?text=Comic+2", dataAiHint: "space opera" },
  { id: "5", type: "Novel", title: "Echoes of Andromeda", author: "Chris Pulsar", genre: "Mystery", image: "https://placehold.co/300x450.png?text=Novel+3", dataAiHint: "detective story" },
  { id: "6", type: "Comic", title: "The Starlight Brigade", author: "Pat Supernova", genre: "Superhero", image: "https://placehold.co/300x450.png?text=Comic+3", dataAiHint: "action comic" },
];

export default function LibraryPage() {
  return (
    <MainLayout>
      <div className="container mx-auto py-8">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight">Stellary Library</h1>
          <p className="text-muted-foreground mt-2">Discover your next favorite story or comic.</p>
        </div>

        {/* Search and Filter Bar */}
        <div className="mb-8 p-4 bg-card border rounded-lg shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
            <div className="md:col-span-2">
              <Label htmlFor="search-library" className="text-sm font-medium">Search</Label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input id="search-library" placeholder="Search by title, author, or tags..." className="pl-10" />
              </div>
            </div>
            <div>
              <Label htmlFor="filter-genre" className="text-sm font-medium">Genre</Label>
              <Select>
                <SelectTrigger id="filter-genre">
                  <SelectValue placeholder="All Genres" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Genres</SelectItem>
                  <SelectItem value="sci-fi">Sci-Fi</SelectItem>
                  <SelectItem value="fantasy">Fantasy</SelectItem>
                  <SelectItem value="horror">Horror</SelectItem>
                  <SelectItem value="adventure">Adventure</SelectItem>
                  {/* Add more genres */}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="filter-type" className="text-sm font-medium">Type</Label>
              <Select>
                <SelectTrigger id="filter-type">
                  <SelectValue placeholder="All Types" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="novel">Novels</SelectItem>
                  <SelectItem value="comic">Comics</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <Button variant="outline" className="mt-4 w-full md:w-auto">
            <Filter className="mr-2 h-4 w-4" /> Apply Filters
          </Button>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {placeholderContent.map((item) => (
            <Card key={item.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col">
              <CardHeader className="p-0">
                <Link href={`/${item.type.toLowerCase() === 'novel' ? 'editor' : 'comics'}/${item.id}`} className="block aspect-[2/3] relative">
                  <Image 
                    src={item.image} 
                    alt={item.title} 
                    layout="fill" 
                    objectFit="cover" 
                    className="hover:scale-105 transition-transform duration-300"
                    data-ai-hint={item.dataAiHint}
                  />
                  <div className="absolute top-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                    {item.type}
                  </div>
                </Link>
              </CardHeader>
              <CardContent className="p-4 flex-grow">
                <CardTitle className="text-lg mb-1 leading-tight hover:text-accent transition-colors">
                  <Link href={`/${item.type.toLowerCase() === 'novel' ? 'editor' : 'comics'}/${item.id}`}>{item.title}</Link>
                </CardTitle>
                <CardDescription className="text-sm">By {item.author}</CardDescription>
                <p className="text-xs text-muted-foreground mt-1">{item.genre}</p>
              </CardContent>
              <CardFooter className="p-4 border-t flex justify-between items-center">
                <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-accent">
                  <Star className="mr-1 h-4 w-4" /> Favorite
                </Button>
                <Button asChild size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  <Link href={`/${item.type.toLowerCase() === 'novel' ? 'editor' : 'comics'}/${item.id}`}>
                    Read <BookOpen className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </MainLayout>
  );
}
