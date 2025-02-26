import React from 'react';

interface TourPackage {
  id: number;
  title: string;
  description: string;
  image: string;
}

const TourPackages: React.FC = () => {
  // ข้อมูลตัวอย่างแพ็คเกจทัวร์
  const packages: TourPackage[] = [
    {
      id: 1,
      title: "ทัวร์ชมเมืองเชียงใหม่",
      description: "เที่ยวชมวัดและสถานที่ประวัติศาสตร์ในเชียงใหม่",
      image: "/images/city-tour.jpg"
    },
    {
      id: 2,
      title: "ผจญภัยภูเขา",
      description: "สัมผัสประสบการณ์ทัวร์ภูเขาและชิมอาหารท้องถิ่น",
      image: "/images/mountain-adventure.jpg"
    },
    // เพิ่มแพ็คเกจอื่น ๆ ตามต้องการ
  ];

  return (
    <section className="tour-packages">
      <h2>แพ็คเกจทัวร์ของเรา</h2>
      <div className="packages-grid">
        {packages.map(pkg => (
          <div className="package-card" key={pkg.id}>
            <img src={pkg.image} alt={pkg.title} />
            <h3>{pkg.title}</h3>
            <p>{pkg.description}</p>
            <a href={`/tours/${pkg.id}`} className="btn">รายละเอียดเพิ่มเติม</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TourPackages;
