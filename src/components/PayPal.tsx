import React from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { PayPalScriptOptions } from "@paypal/paypal-js/types/script-options";
import { PayPalButtonsComponentOptions } from "@paypal/paypal-js/types/components/buttons";

const PayPal = () => {
  const initialOptions: PayPalScriptOptions = {
    "client-id": "test",
    currency: "NZD",
  };
  
  const paypalbuttonTransactionProps: PayPalButtonsComponentOptions = {
    style: { layout: "vertical" },
    createOrder(data, actions) {
      return actions.order.create({
        purchase_units: [
          {
            amount: {
              value: "0.01",
            },
          },
        ],
      });
    },

    onApprove(data, actions) {
      /**
       * data: {
       *   orderID: string;
       *   payerID: string;
       *   paymentID: string | null;
       *   billingToken: string | null;
       *   facilitatorAccesstoken: string;
       * }
       */
      return actions.order.capture().then((details) => {
        alert("Transaction completed");
      });
    },
  };

  return (
    <PayPalScriptProvider options={initialOptions}>
      <PayPalButtons {...paypalbuttonTransactionProps} />
    </PayPalScriptProvider>
  );
};

export default PayPal;
