"use client";

import { IconArrow } from "@/components/post/toc";
import * as React from "react";
import { HTMLProps } from "react";
import cx from "@/utils/cx";
import Icon, { ICON_NAMES } from "@/components/icon";
import IconRedis from "@/components/icon-redis";
import IconKafka from "@/components/icon-kafka";
import IconQStash from "@/components/icon-qstash";

export const ProductsLabel = {
  redis: "Redis",
  kafka: "Kafka",
  qstash: "QStash",
};

export const UseCasesLabel = {
  ai_ml: "AI/ML",
};

export const StackLabel = {
  nextjs: "Next.js",
  react: "React",
  nuxtjs: "Nuxt",
  vuejs: "Vue",
  svelte: "Svelte",
  gatsby: "Gatsby",
  remix: "Remix",
  astro: "Astro",
};

export default function ExampleFilter({
  selectedProducts,
  setSelectedProduct,
  selectedUseCase,
  setSelectedUseCase,
  selectedStacks,
  setSelectedStack,
  allUseCases,
  allStacks,
}) {
  return (
    <form className="grid gap-4">
      {/*<div className="pb-4 border-b border-b-white/5">
        <input
          type="search"
          className="px-4 py-2 bg-white rounded text-zinc-950"
        />
      </div>*/}

      <Child>
        <h4 className="text-sm uppercase tracking-widest opacity-60">Filter</h4>
      </Child>
      <Child>
        <div className="space-y-0.5">
          {["redis", "kafka", "qstash"].map((key) => {
            const isRedis = key === "redis";
            const isKafka = key === "kafka";
            const isQStash = key === "qstash";
            const isActive = selectedProducts.includes(key);

            return (
              <Item
                key={key}
                value={key}
                checked={selectedProducts.includes(key)}
                label={ProductsLabel[key]}
                onChange={(e) => {
                  const { value, checked } = e.target;
                  if (checked) {
                    setSelectedProduct([...selectedProducts, value]);
                  } else {
                    setSelectedProduct(
                      selectedProducts.filter((item) => item !== value)
                    );
                  }
                }}
                className={cx(
                  isRedis && isActive && "bg-red-200/10",
                  isKafka && isActive && "bg-blue-200/10",
                  isQStash && isActive && "bg-purple-200/10"
                )}
                icon={
                  <>
                    {isRedis && (
                      <IconRedis
                        width={20}
                        className={cx("grayscale", isActive && "grayscale-0")}
                      />
                    )}
                    {isKafka && (
                      <IconKafka
                        width={20}
                        className={cx("grayscale", isActive && "grayscale-0")}
                      />
                    )}
                    {isQStash && (
                      <IconQStash
                        width={20}
                        className={cx("grayscale", isActive && "grayscale-0")}
                      />
                    )}
                  </>
                }
              />
            );
          })}
        </div>
      </Child>
      <Child>
        <Toc>
          <Toc.Summary count={selectedStacks.length}>Stack</Toc.Summary>
          <div className="space-y-0.5">
            {allUseCases.map((key) => {
              return (
                <Item
                  key={key}
                  value={key}
                  checked={selectedStacks.includes(key)}
                  label={StackLabel[key]}
                  onChange={(e) => {
                    const { value, checked } = e.target;
                    if (checked) {
                      setSelectedStack([...selectedStacks, value]);
                    } else {
                      setSelectedStack(
                        selectedStacks.filter((item) => item !== value)
                      );
                    }
                  }}
                />
              );
            })}
          </div>
        </Toc>
      </Child>
      <Child>
        <Toc>
          <Toc.Summary count={selectedUseCase.length}>Use Cases</Toc.Summary>
          <div className="space-y-0.5">
            {allStacks.map((key) => {
              return (
                <Item
                  key={key}
                  value={key}
                  checked={selectedUseCase.includes(key)}
                  label={UseCasesLabel[key]}
                  onChange={(e) => {
                    const { value, checked } = e.target;
                    if (checked) {
                      setSelectedUseCase([...selectedUseCase, value]);
                    } else {
                      setSelectedUseCase(
                        selectedUseCase.filter((item) => item !== value)
                      );
                    }
                  }}
                />
              );
            })}
          </div>
        </Toc>
      </Child>
    </form>
  );
}

function Child({ className, children, ...props }: HTMLProps<HTMLDivElement>) {
  return (
    <div className={cx("border-b border-b-white/5 pb-4", className)} {...props}>
      {children}
    </div>
  );
}

function Toc({ className, children, ...props }: HTMLProps<HTMLDetailsElement>) {
  return (
    <details
      role="navigation"
      aria-label="Use Cases"
      className={cx("group/toc", className)}
      {...props}
    >
      {children}
    </details>
  );
}

Toc.Summary = function TocSummary({
  count = 0,
  className,
  children,
  ...props
}: HTMLProps<HTMLDetailsElement> & { count?: number }) {
  return (
    <summary
      className={cx(
        "flex select-none list-none items-center gap-2",
        "mb-px h-10 rounded px-4 text-white/40 hover:bg-white/03",
        className
      )}
      {...props}
    >
      <span className="inline-flex w-5 shrink-0 items-center justify-center">
        <IconArrow className="rotate-0 group-open/toc:rotate-90" />
      </span>
      <span className="grow text-sm uppercase tracking-wide">{children}</span>
      {count > 0 && (
        <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-white/5 font-mono text-sm">
          {count}
        </span>
      )}
    </summary>
  );
};

function Item({
  value,
  icon,
  label,
  className,
  checked,
  onChange = () => {},
}: HTMLProps<HTMLLabelElement> & {
  icon?: React.ReactNode;
  value: string;
  label: string;
  checked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <label
      className={cx(
        "flex cursor-pointer select-none items-center gap-2",
        "rounded-lg bg-white/03 px-4 py-3 text-zinc-400",
        "hover:bg-white/5",
        checked && "bg-white/10 text-zinc-50",
        className
      )}
    >
      <input
        type="checkbox"
        value={value}
        onChange={onChange}
        className="pointer-events-none absolute opacity-0"
      />
      {icon ? (
        icon
      ) : (
        <span
          className={cx(
            "relative h-5 w-5 rounded border border-white/10",
            checked && "border-emerald-400"
          )}
        >
          <Icon
            icon={ICON_NAMES.Check}
            className={cx(
              "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",
              "text-lg opacity-0 transition duration-100",
              checked && "text-emerald-400 opacity-100"
            )}
          />
        </span>
      )}
      <span className="grow">{label}</span>
    </label>
  );
}