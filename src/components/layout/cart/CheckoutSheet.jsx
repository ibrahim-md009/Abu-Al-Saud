import { useState } from "react";
import Button from "../../ui/Button";
import { useStore } from "../../../store/useStore";
import FadeAnimation from "../../ui/FadeAnimation";
import { z } from "zod";

const CheckoutSheet = () => {
  const {
    isCheckoutSheetOpen,
    closeCheckoutSheet,
    openCart,
    cartItems,
    resetCart,
  } = useStore();

  const formFields = [
    {
      id: "name",
      label: "الاسم",
      type: "text",
      placeholder: "اسمك الكامل",
      required: true,
    },
    {
      id: "address",
      label: "العنوان",
      type: "text",
      placeholder: "الحي، الشارع، رقم المبنى",
      required: true,
    },
    {
      id: "phone",
      label: "رقم الهاتف",
      type: "tel",
      placeholder: "01xxxxxxxxx",
      required: true,
    },
    {
      id: "note",
      label: "ملاحظة (اختياري)",
      placeholder: "أي تفاصيل إضافية...",
      required: false,
      component: "textarea",
      rows: 2,
    },
  ];

  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phone: "",
    note: "",
  });

  const checkoutSchema = z.object({
    name: z.string().min(1, "الاسم مطلوب"),
    address: z.string().min(1, "العنوان مطلوب"),
    phone: z
      .string()
      .min(1, "رقم الهاتف مطلوب")
      .length(11, "يجب ان يتكون رقم الهاتف من 11 رقم")
      .regex(
        /^01[0125][0-9]{8}$/,
        "يرجى إدخال رقم هاتف صحيح (11 رقم) يبدأ بـ 01",
      ),
    note: z.string(),
  });

  const [errors, setErrors] = useState({});

  if (!isCheckoutSheetOpen) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSendOrder = () => {
    const { name, address, phone, note } = formData;

    const result = checkoutSchema.safeParse(formData);
    if (!result.success) {
      const newErrors = {};

      result.error.issues.forEach((issue) => {
        const fieldName = issue.path[0];

        if (!newErrors[fieldName]) {
          newErrors[fieldName] = issue.message;
        }
      });
      setErrors(newErrors);
      return;
    }

    const total = cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0,
    );

    let msg = `*طلب جديد من الموقع* \n\n`;
    msg += ` *الاسم:* ${name.trim()}\n`;
    msg += ` *العنوان:* ${address.trim()}\n`;
    msg += ` *الهاتف:* ${phone.trim()}\n`;
    if (note.trim()) msg += ` *ملاحظات:* ${note.trim()}\n`;

    msg += `\n *الطلبات:*\n`;
    cartItems.forEach((item, index) => {
      msg += `${index + 1}. ${item.name} (${item.size}) × ${item.quantity} = ${item.price * item.quantity} ج.م\n`;
    });

    msg += `\n *الإجمالي:* ${total} ج.م`;

    const whatsappPhone = "201070100122";
    const url = `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(msg)}`;

    window.open(url, "_blank");
    return true;
  };

  return (
    <>
      <div
        className="overlay show"
        id="overlay"
        onClick={closeCheckoutSheet}
      ></div>

      <FadeAnimation className="sheet checkout-sheet" id="checkoutSheet">
        <div className="sheet-handle"></div>
        <div className="sheet-head">
          <h4 className="sheet-title">معلومات التوصيل</h4>
          <Button
            className="drawer-close"
            onClick={() => {
              closeCheckoutSheet();
              openCart();
            }}
          >
            ×
          </Button>
        </div>

        <div className="checkout-form">
          {formFields.map((field) => {
            const fieldError = errors[field.id];

            return (
              <label key={field.id} className="form-field">
                <span className="field-label">
                  {field.label}{" "}
                  {field.required && <span className="req">*</span>}
                </span>

                {field.component === "textarea" ? (
                  <textarea
                    id={field.id}
                    placeholder={field.placeholder}
                    rows={field.rows || 3}
                    value={formData[field.id]}
                    onChange={handleChange}
                  />
                ) : (
                  <input
                    type={field.type}
                    id={field.id}
                    placeholder={field.placeholder}
                    value={formData[field.id]}
                    onChange={handleChange}
                  />
                )}
                {fieldError && (
                  <span className="mt-1 block text-xs text-red-400">
                    {fieldError}
                  </span>
                )}
              </label>
            );
          })}

          <Button
            className="cta-btn cta-solid w-full justify-center"
            id="sendOrderBtn"
            onClick={() => {
              if (handleSendOrder()) resetCart();
            }}
          >
            <span className="cta-label">إرسال الطلب عبر واتساب</span>
          </Button>
        </div>
      </FadeAnimation>
    </>
  );
};

export default CheckoutSheet;
