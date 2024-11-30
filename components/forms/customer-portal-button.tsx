"use client";

import { useTransition } from "react";

import { Button } from "@/components/ui/button";
import { Icons } from "@/components/shared/icons";

interface CustomerPortalButtonProps {
  userStripeId: string;
}

export function CustomerPortalButton({
  userStripeId,
}: CustomerPortalButtonProps) {
  let [isPending, startTransition] = useTransition();

  return (
    <Button disabled={isPending}>
      {isPending ? (
        <Icons.spinner className="mr-2 size-4 animate-spin" />
      ) : null}
      Open Customer Portal
    </Button>
  );
}
