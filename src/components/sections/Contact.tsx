"use client";

import FadeIn from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldContent,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { contactFormSchema } from "@/zod/contactForm.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { StarIcon } from "lucide-react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import type { ContactFormInput, ContactFormPayload } from "@/types/contact";

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
    // 本番ではAPI送信などに置き換え
    console.log("contact form payload", payload);
    toast.success("お問い合わせを受け付けました（送信はダミーです）");
    reset({
      email: "",
      category: "general",
      rating: 5,
      content: "",
      createdAt: new Date().toISOString(),
    });
  };

  return (
    <section className="relative overflow-hidden bg-linear-to-br from-brand-primary-light/20 via-white to-brand-secondary/10 py-20 sm:py-24">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
      <div className="container relative z-10 mx-auto px-6">
        <FadeIn className="max-w-4xl mx-auto text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-primary">
            Contact
          </p>
          <h2 className="mt-2 text-3xl font-bold text-brand-text-main sm:text-4xl">
            ご質問・改善要望をお聞かせください
          </h2>
          <div className="mt-4 space-y-2 text-base text-brand-text-secondary sm:text-lg">
            <p>改善のためのご意見や不具合報告をお寄せください。数分で完了します。</p>
            <p>4つのカテゴリと星評価で、できるだけ具体的にお知らせいただけると助かります。</p>
          </div>
        </FadeIn>

        <FadeIn delay={150} className="mt-10 max-w-4xl mx-auto">
          <div className="rounded-2xl border border-brand-primary/10 bg-white/80 p-6 shadow-xl backdrop-blur-sm sm:p-10">
            <form className="space-y-8" onSubmit={handleSubmit(onSubmit)}>
              <FieldGroup>
                <Controller
                  name="email"
                  control={control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor="contact-email">メールアドレス</FieldLabel>
                      <FieldContent>
                        <Input
                          {...field}
                          id="contact-email"
                          type="email"
                          aria-invalid={fieldState.invalid}
                          placeholder="you@example.com"
                          autoComplete="email"
                        />
                        <FieldError errors={[errors.email]} />
                      </FieldContent>
                    </Field>
                  )}
                />

                <Controller
                  name="category"
                  control={control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel>フィードバックの種類</FieldLabel>
                      <FieldContent>
                        <div className="flex flex-wrap gap-2">
                          {categoryOptions.map((option) => {
                            const isActive = field.value === option.value;
                            return (
                              <button
                                key={option.value}
                                type="button"
                                onClick={() => field.onChange(option.value)}
                                className={cn(
                                  "rounded-xl border px-4 py-2 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary/40",
                                  isActive
                                    ? "border-emerald-500 bg-emerald-50 text-emerald-700 shadow-[0_2px_8px_rgba(16,185,129,0.12)]"
                                    : "border-gray-200 bg-white text-brand-text-main hover:border-emerald-200 hover:bg-emerald-50/60"
                                )}
                                aria-pressed={isActive}
                                aria-label={option.label}
                              >
                                {option.label}
                              </button>
                            );
                          })}
                        </div>
                        <FieldError errors={[errors.category]} />
                      </FieldContent>
                    </Field>
                  )}
                />

                <Controller
                  name="rating"
                  control={control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel>星評価（1-5）</FieldLabel>
                      <FieldContent>
                        <div className="flex items-center gap-2">
                          {[1, 2, 3, 4, 5].map((value) => {
                            const active = (field.value ?? 0) >= value;
                            return (
                              <button
                                key={value}
                                type="button"
                                onClick={() => field.onChange(value)}
                                className={cn(
                                  "flex h-10 w-10 items-center justify-center rounded-full border transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary/50",
                                  active
                                    ? "border-amber-300 bg-white text-amber-400 shadow-[0_2px_8px_rgba(0,0,0,0.08)]"
                                    : "border-border bg-white text-muted-foreground hover:border-amber-200 hover:bg-amber-50"
                                )}
                                aria-pressed={active}
                                aria-label={`星${value}を選択`}
                              >
                                <StarIcon
                                  className={cn(
                                    "size-6",
                                    active
                                      ? "fill-amber-400 text-amber-400 drop-shadow-[0_0_6px_rgba(251,191,36,0.65)]"
                                      : "fill-none text-gray-300"
                                  )}
                                />
                              </button>
                            );
                          })}
                          <span className="text-sm text-muted-foreground">
                            {field.value ?? 0}/5
                          </span>
                        </div>
                        <FieldError errors={[errors.rating]} />
                      </FieldContent>
                    </Field>
                  )}
                />

                <Controller
                  name="content"
                  control={control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor="contact-content">
                        詳細内容
                      </FieldLabel>
                      <FieldContent>
                        <textarea
                          {...field}
                          id="contact-content"
                          rows={5}
                          aria-invalid={fieldState.invalid}
                          placeholder="具体的にお書きください"
                          className="w-full rounded-md border border-input bg-white px-3 py-2 text-sm shadow-xs outline-none transition focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 aria-invalid:border-destructive aria-invalid:ring-destructive/20"
                        />
                        <FieldError errors={[errors.content]} />
                      </FieldContent>
                    </Field>
                  )}
                />
              </FieldGroup>

              <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm text-brand-text-secondary">
                  送信は仮実装です。データは保存されず、ブラウザ上で完結します。
                </p>
                <Button
                  type="submit"
                  className="min-w-[180px] shadow-lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "送信中..." : "送信する"}
                </Button>
              </div>
            </form>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
