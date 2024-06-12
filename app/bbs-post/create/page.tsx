"use client";

import { Button } from '@/components/ui/button'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import React from 'react'
import { useForm } from 'react-hook-form'
import {z} from "zod";
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';

// スキーマ(データの構造)を定義
const BBSSchema = z.object({
  title: z.string().min(2, {message: "2文字以上の文字列を入力してください"}).max(10, {message: "10文字以下の文字列を入力してください"}),
  username: z.string().min(2, {message: "2文字以上の文字列を入力してください"}).max(10, {message: "10文字以下の文字列を入力してください"}),
  content: z.string().min(10, {message: "10文字以上の文字列を入力してください"}).max(100, {message: "100文字以下の文字列を入力してください"}),
})


function CreateBBSPage() {

  const router = useRouter();

  // スキーマからTypeScriptの型を推論
  type BBSType = z.infer<typeof BBSSchema>

  // useForm: https://react-hook-form.com/docs/useform/handlesubmit
  const form = useForm<BBSType> ({
    resolver: zodResolver(BBSSchema), //外部ライブラリを検証
    defaultValues: {
      title: "",
      username: "",
      content: "",
    }
  });

  // formのバリデーションチェックが成功した時に実行する関数(ここでは引数で受け取った値を/api/postのPOST関数に送信)
  // values引数: formで入力されたBBSType型のデータ
  const onSubmit = async (values: BBSType)=> {
    const requestOption = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(values),
    }

     await fetch('http://localhost:3000/api/post/', requestOption)
      .then(()=> {
        router.push('/');
        router.refresh();
      })
      .catch((err)=> {
        console.log(err);
       }) 
    }


  return (
        <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}  className="space-y-3 w-1/2 px-7">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>User Name</FormLabel>
              <FormControl>
                <Input placeholder="User Name" {...field} />
              </FormControl>
              <FormMessage/>
            </FormItem>
          )}
        />
          <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="Title" {...field} />
              </FormControl>
              <FormMessage/>

            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="Content" {...field} />
              </FormControl>
              <FormMessage/>
j
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}

export default CreateBBSPage