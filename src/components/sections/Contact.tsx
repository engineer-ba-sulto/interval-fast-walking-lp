"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Send, StarIcon } from "lucide-react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import { addContact } from "@/actions/contact.action";
import { Button } from "@/components/ui/button";
import FadeIn from "@/components/ui/FadeIn";
import {
  Field,
  FieldContent,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import type { ContactFormInput, ContactFormPayload } from "@/types/contact";
import { contactFormSchema } from "@/zod/contactForm.schema";

const categoryOptions: Array<{
  value: ContactFormPayload["category"];
  label: string;
}> = [
  { value: "general", label: "フィードバック" },
  { value: "ui/ux", label: "使い勝手・デザイン" },
  { value: "feature", label: "機能要望" },
  { value: "bug", label: "バグ・不具合" },
];

export default function Contact() {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormInput>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      email: "",
      category: "general",
      rating: 5,
      content: "",
      createdAt: new Date().toISOString(),
    },
  });

  const onSubmit = async (data: ContactFormInput) => {
    const payload: ContactFormPayload = contactFormSchema.parse({
      ...data,
      createdAt: new Date().toISOString(),
    });

    const result = await addContact(payload);

    if (!result.success) {
      toast.error(result.message);
      return;
    }

    toast.success("お問い合わせを受け付けました");
    reset({
      email: "",
      category: "general",
      rating: 5,
      content: "",
      createdAt: new Date().toISOString(),
    });
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-white py-24 md:py-40"
    >
      {/* Texture Layer */}
      <div className="absolute inset-0 bg-noise opacity-[0.02] pointer-events-none mix-blend-overlay"></div>

      {/* Organic Background Shapes */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-brand-bg-start/30 mask-radial -z-10 animate-spin-slow opacity-50"></div>
      </div>

      <div className="container relative z-10 mx-auto px-6 max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">
          <div className="lg:col-span-2">
            <FadeIn>
              <span className="text-brand-primary font-bold tracking-widest text-sm uppercase mb-4 block">
                Feedback
              </span>
              <h2 className="text-3xl md:text-5xl font-black text-brand-text-main mb-8 leading-tight tracking-tight">
                あなたの声が、
                <br />
                「歩時間」を育てる
              </h2>
              <div className="space-y-6 text-brand-text-sub text-lg font-medium opacity-80 leading-relaxed">
                <p>
                  改善のためのご意見や不具合報告、新しい機能のアイデアなど、どんなことでもお聞かせください。
                </p>
                <p>
                  ユーザーの皆様と一緒に、最高のウォーキング体験を作っていきたいと考えています。
                </p>
              </div>

              {/* Decorative Card */}
              <div className="mt-12 p-8 bg-brand-primary/5 rounded-4xl border border-brand-primary/10 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-brand-primary/10 rounded-full blur-2xl -mr-8 -mt-8 group-hover:scale-150 transition-transform duration-700"></div>
                <p className="text-brand-primary font-bold text-sm mb-2">
                  Response rate
                </p>
                <p className="text-brand-text-main font-black text-2xl">
                  Usually within 24h
                </p>
              </div>
            </FadeIn>
          </div>

          <div className="lg:col-span-3">
            <FadeIn delay={200}>
              <div className="rounded-[3rem] border border-brand-primary/10 bg-white p-8 md:p-12 shadow-2xl shadow-emerald-900/5 relative overflow-hidden group">
                <form
                  className="space-y-8 relative z-10"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <FieldGroup className="space-y-8">
                    <Controller
                      name="email"
                      control={control}
                      render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                          <FieldLabel
                            htmlFor="contact-email"
                            className="font-bold text-brand-text-main"
                          >
                            メールアドレス
                          </FieldLabel>
                          <FieldContent>
                            <Input
                              {...field}
                              id="contact-email"
                              type="email"
                              aria-invalid={fieldState.invalid}
                              placeholder="you@example.com"
                              className="h-14 rounded-2xl bg-slate-50 border-slate-100 focus:bg-white transition-all"
                            />
                            <FieldError errors={[errors.email]} />
                          </FieldContent>
                        </Field>
                      )}
                    />

                    <Controller
                      name="category"
                      control={control}
                      render={({ field }) => (
                        <Field>
                          <FieldLabel className="font-bold text-brand-text-main">
                            フィードバックの種類
                          </FieldLabel>
                          <FieldContent>
                            <div className="flex flex-wrap gap-3">
                              {categoryOptions.map((option) => {
                                const isActive = field.value === option.value;
                                return (
                                  <button
                                    key={option.value}
                                    type="button"
                                    onClick={() => field.onChange(option.value)}
                                    className={cn(
                                      "rounded-2xl border px-5 py-3 text-sm font-bold transition-all duration-300",
                                      isActive
                                        ? "border-brand-primary bg-brand-primary text-white shadow-lg shadow-emerald-900/10 scale-105"
                                        : "border-slate-100 bg-slate-50 text-brand-text-sub hover:border-brand-primary/30 hover:bg-white",
                                    )}
                                  >
                                    {option.label}
                                  </button>
                                );
                              })}
                            </div>
                          </FieldContent>
                        </Field>
                      )}
                    />

                    <Controller
                      name="rating"
                      control={control}
                      render={({ field }) => (
                        <Field>
                          <FieldLabel className="font-bold text-brand-text-main">
                            今の満足度は？
                          </FieldLabel>
                          <FieldContent>
                            <div className="flex items-center gap-3">
                              {[1, 2, 3, 4, 5].map((value) => {
                                const active = (field.value ?? 0) >= value;
                                return (
                                  <button
                                    key={value}
                                    type="button"
                                    onClick={() => field.onChange(value)}
                                    className={cn(
                                      "flex h-12 w-12 items-center justify-center rounded-2xl transition-all duration-300",
                                      active
                                        ? "bg-amber-50 text-amber-500 scale-110"
                                        : "bg-slate-50 text-slate-300 hover:bg-slate-100",
                                    )}
                                  >
                                    <StarIcon
                                      className={cn(
                                        "size-7 transition-all duration-300",
                                        active ? "fill-current" : "fill-none",
                                      )}
                                    />
                                  </button>
                                );
                              })}
                            </div>
                          </FieldContent>
                        </Field>
                      )}
                    />

                    <Controller
                      name="content"
                      control={control}
                      render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                          <FieldLabel
                            htmlFor="contact-content"
                            className="font-bold text-brand-text-main"
                          >
                            詳細内容
                          </FieldLabel>
                          <FieldContent>
                            <textarea
                              {...field}
                              id="contact-content"
                              rows={5}
                              placeholder="具体的にお書きください"
                              className="w-full rounded-2xl bg-slate-50 border border-slate-100 px-5 py-4 text-base outline-none transition-all focus:bg-white focus:border-brand-primary ring-brand-primary/10 focus:ring-4"
                            />
                            <FieldError errors={[errors.content]} />
                          </FieldContent>
                        </Field>
                      )}
                    />
                  </FieldGroup>

                  <div className="pt-4">
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full h-16 rounded-2xl bg-brand-primary hover:bg-brand-primary-dark text-white font-black text-lg shadow-xl shadow-emerald-900/10 transition-all hover:-translate-y-1 active:translate-y-0"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          送信中...
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          メッセージを送る <Send size={20} />
                        </span>
                      )}
                    </Button>
                  </div>
                </form>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
