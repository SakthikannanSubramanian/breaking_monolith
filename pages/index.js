import Link from "next/link";
const Index = () => (
  <div>
    <h1>Hello Sakthi!</h1>
    <Link href="/test" as={process.env.FE_URL + "/test"}>
      Sakthi
    </Link>
  </div>
);

export default Index;
