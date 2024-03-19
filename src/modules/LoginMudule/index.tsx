"use client";

import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import { useToast } from "@/components/ui/Toast/use-toast";

import { USER_DATA } from "@/shared/constants/localStorageVariables";
import { HOME_URL } from "@/shared/constants/urlPaths";
import { setLocalStorage } from "@/shared/utils/localStorageUtils";
import { useRouter } from "next/navigation";

import { useState } from "react";

type CardProps = React.ComponentProps<typeof Card>;

interface LoginFormProps {
  email: string;
  password: string;
}

const initialState: LoginFormProps = {
  email: "",
  password: "",
};

const LoginModule = ({ className, ...props }: CardProps) => {
  const [form, setForm] = useState<LoginFormProps>(initialState);
  const router = useRouter();
  const { toast } = useToast();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleOnSubmit = async () => {
    var validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

    if (!validEmail.test(form.email)) {
      handleErrorAlert("Error", "Debe ser un correo válido");
      return;
    }

    if (!form.email || !form.password) {
      handleErrorAlert("Error", "Todos los campos son obligatorios");

      return;
    }
    setLocalStorage(USER_DATA, form.email);
    router.push(HOME_URL);
  };

  const handleErrorAlert = (title: string, description: string) => {
    toast({
      title: title,
      description: `* ${description}`,
      variant: "destructive",
    });
  };

  return (
    <Card className=" mx-4">
      <CardHeader className="space-y-1">
        <div className="flex items-center justify-center space-x-2, mb-8 ">
          <span className="self-center text-[50px] font-bold whitespace-nowrap dark:text-white">DELOSI</span>
        </div>

        <CardTitle className="text-base flex justify-center">Bienvenid@ a la prueba técnica de DELOSI</CardTitle>
        <CardDescription>Ingresa tu correo y contraseña para continuar</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid gap-2">
          <Label htmlFor="email">Correo</Label>
          <Input value={form.email} name="email" id="email" type="email" placeholder="tucorreo@ejemplo.com" onChange={handleChange} />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="password">Contraseña</Label>
          <Input value={form.password} name="password" id="password" type="password" placeholder="••••••" onChange={handleChange} />
        </div>
      </CardContent>
      <CardFooter>
        <Button onClick={handleOnSubmit} className="w-full">
          INGRESAR
        </Button>
      </CardFooter>
    </Card>
  );
};

export default LoginModule;
