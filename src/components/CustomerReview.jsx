import CustomerImage from "../assets/Customer.png";

function CustomerReview() {
  return (
    <section className="w-full flex flex-col items-center mt-32 mb-20 px-4">
      {/* Heading */}
      <h2 className="text-white text-4xl md:text-5xl font-semibold mb-10 text-center">
        Customer Review
      </h2>

      {/* Responsive Image */}
      <div className="w-full max-w-[1650px]">
        <img
          src={CustomerImage}
          alt="Customer Reviews"
          className="w-full h-auto object-contain"
        />
      </div>
    </section>
  );
}

export default CustomerReview;
