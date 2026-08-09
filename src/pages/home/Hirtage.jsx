import FadeAnimation from "../../components/ui/FadeAnimation";

const Hirtage = () => {
  return (
    <section className="on-cream" id="heritage">
      <div className="heritage-grid container flex">
        <FadeAnimation className="heritage-num">
          ١٨٩٦
          <span>تأسست في القدس</span>
        </FadeAnimation>

        <FadeAnimation className="heritage-body">
          <span className="eyebrow">من نحن</span>
          <h2 className="section-title mt-3.5 text-right">
            حكاية طعمٍ لم يتغيّر
          </h2>
          <p>
            منذ أكثر من قرن، توارثت عائلة أبو السعود سرّ صناعة الكنافة والبقلاوة
            على الطريقة النابلسية والاسطنبولية الأصيلة، لتصبح اسماً يُذكر على
            موائد الأفراح والمناسبات في مصر وفلسطين على حدٍّ سواء.
          </p>
          <p>
            اليوم، ما زلنا نستخدم السمنة البلدي والجبنة العكاوي الطازجة، ونرفض
            أي اختصار يمسّ الجودة التي عرفنا بها أجيالنا الأولى.
          </p>
          <div className="timeline">
            <div className="tl-item">
              <span className="tl-year">١٨٩٦</span>
              <span className="tl-text">
                تأسيس "حلويات ساق الله العربية" في غزة على يد الحاج فايق ساق
                الله، بعد أن تعلم وأتقن أصول الصنعة في بيروت.
              </span>
            </div>
            <div className="tl-item">
              <span className="tl-year">٢٠٠١</span>
              <span className="tl-text">
                اعتماد اسم "حلويات أبو السعود العربية" إلى جانب اسم العائلة "ساق
                الله"، ليكون امتداداً عصرياً وتطويراً للمسيرة العريقة.
              </span>
            </div>
            <div className="tl-item">
              <span className="tl-year">٢٠٢٥</span>
              <span className="tl-text">
                افتتاح أول فرع خارج فلسطين في جمهورية مصر العربية كرمز للإصرار
                وتجديد للنجاح.
              </span>
            </div>
          </div>
        </FadeAnimation>
      </div>
    </section>
  );
};

export default Hirtage;
