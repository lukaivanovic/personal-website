"use client";

import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
export default function BookACall() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "15min" });
      cal("ui", {
        theme: "dark",
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);
  return (
    <button
      data-cal-namespace="15min"
      data-cal-link="lukaivanovic/15min"
      data-cal-config='{"layout":"month_view","theme":"dark"}'
      className="bg-foreground text-background hover:text-secondary px-1"
    >
      Book a call
    </button>
  );
}
