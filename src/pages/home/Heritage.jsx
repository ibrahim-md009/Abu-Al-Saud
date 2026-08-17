import FadeAnimation from "../../components/ui/FadeAnimation";

const timelineData = [
  {
    id: 1,
    year: "١٨٩٦",
    text: 'تأسيس "حلويات ساق الله العربية" في غزة على يد الحاج فايق ساق الله، بعد أن تعلم وأتقن أصول الصنعة في بيروت.',
  },
  {
    id: 2,
    year: "٢٠٠١",
    text: 'اعتماد اسم "حلويات أبو السعود العربية" إلى جانب اسم العائلة "ساق الله"، ليكون امتداداً عصرياً وتطويراً للمسيرة العريقة.',
  },
  {
    id: 3,
    year: "٢٠٢٥",
    text: "افتتاح أول فرع خارج فلسطين في جمهورية مصر العربية كرمز للإصرار وتجديد للنجاح.",
  },
];

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
            {timelineData.map((item) => (
              <div className="tl-item" key={item.id}>
                <span className="tl-year">{item.year}</span>
                <span className="tl-text">{item.text}</span>
              </div>
            ))}
          </div>
        </FadeAnimation>
      </div>
    </section>
  );
};

export default Hirtage;
