'use client';

import axios from 'axios';
import { AiFillGithub } from "react-icons/ai";
import useLoginModal from "@/app/hooks/useLoginModal";
import { FcGoogle } from "react-icons/fc";
import { useCallback, useState } from "react";
import { toast } from "react-hot-toast";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import Modal from "./Modal";


const RegisterModal = () => {
    const registerModal = useRegisterModal();
    const loginModal = useLoginModal();
    const [isLoading, setIsLoading] = useState(false);

    const { register, handleSubmit,
        formState: {
          errors,
        },
    } = useForm<FieldValues>({
        defaultValues: {
          name: '',
          email: '',
          password: ''
        },
    });

      const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true);
    
        axios.post('/api/register', data)
        .then(() => {
          toast.success('Registered!');
          registerModal.onClose();
          loginModal.onOpen();
        })
        .catch((error) => {
          toast.error(error);
        })
        .finally(() => {
          setIsLoading(false);
        })
      }


      const onToggle = useCallback(() => {
        registerModal.onClose();
        loginModal.onOpen();
      }, [registerModal, loginModal])

      
  

  return (
    <Modal
    disabled={isLoading}
    isOpen={registerModal.isOpen}
    title="Register"
    actionLabel="Continue"
    onClose={registerModal.onClose}
    onSubmit={handleSubmit(onSubmit)}
    
  />
  )
}

export default RegisterModal