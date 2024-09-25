import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function billing() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="z-[10] sticky top-0 w-full bg-background/95 border-b backdrop-blur-sm dark:bg-black/[0.6] border-border/40">
        <div className="ml-10 container h-14 flex items-center">
          <h2>Facture</h2>
        </div>
      </header>
      <main className="m-10 min-h-[calc(100vh-57px-97px)] flex-1">
        <Card>
          <CardHeader>
            <CardTitle>Mes factures</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="center" >
              <TabsList>
                <TabsTrigger value="center">Facturation / Centre</TabsTrigger>
                <TabsTrigger value="intermediate">Facturation / Intermédiaire</TabsTrigger>
                <TabsTrigger value="myprice">Mes tarifs</TabsTrigger>
              </TabsList>
              <TabsContent value="center">..........</TabsContent>
              <TabsContent value="intermediate">..........</TabsContent>
              <TabsContent value="myprice">..........</TabsContent>
            </Tabs>
          </CardContent>
          <CardFooter>
            <Button>Ajouter</Button>
          </CardFooter>
        </Card>
      </main>
    </div>
  );
}