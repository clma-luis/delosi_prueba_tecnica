import * as React from "react";

import { Button } from "@/components/ui/Button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/Dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/Drawer";
import { cn } from "@/lib/utils";
import { useMediaQuery } from "@/shared/hooks/useMediaQuery";
import Image from "next/image";

export function DrawerInformation() {
  const [open, setOpen] = React.useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="outline">Presiona aqui</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[800px]">
          <DialogHeader>
            <DialogTitle>Rotar matriz en sentido contrario al reloj.</DialogTitle>
            <DialogDescription>Descripción</DialogDescription>
          </DialogHeader>
          <ProfileForm />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant="outline">Presiona aqui</Button>
      </DrawerTrigger>
      <DrawerContent className="h-full">
        <DrawerHeader className="text-left">
          <DrawerTitle>Rotar matriz en sentido contrario al reloj.</DrawerTitle>
          <DrawerDescription>Descripción</DrawerDescription>
        </DrawerHeader>
        <ProfileForm className="px-4" />
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline">Cerrar</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

function ProfileForm({ className }: React.ComponentProps<"form">) {
  return (
    <div className={cn("grid items-start gap-4", className)}>
      <p>Se tiene el requerimiento de crear una vista en Next.js con las mejores prácticas tanto en el código como en SEO.</p>
      <p>
        En base a ello, se requiere implementar una vista donde se pueda ingresar un array de arrays de números que conformen una matriz de
        NxN el ingreso de este array que sea dinámico, y se devuelva la misma matriz que represente la imagen, pero rotada en sentido
        anti-horario (90 grados). Se debe controlar correctamente los errores. Considerar que esta primera versión será la base para que
        posteriormente otros desarrolladores puedan incluir los demás requerimientos que aún están en definición, por lo que la solución
        debe garan zar la mantenibilidad y escalamiento.
      </p>
      <p>
        Se evaluará el correcto funcionamiento de todas las opciones implementadas y la creación de las pruebas unitarias. Enviar la
        solución completa (como zip o la URL del repo) y un ejemplo de ejecución.
      </p>
      <div className="w-full flex justify-center items-center">
        <div style={{ position: "relative", minWidth: "340px", height: "150px" }}>
          <Image src="/exampleTwo.png" alt="Ejemplo uno" priority fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
        </div>
      </div>
    </div>
  );
}
