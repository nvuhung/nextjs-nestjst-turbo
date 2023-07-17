import { Button, Header } from "ui";

async function getApi() {
  try {
    const data = await fetch("http://localhost:3000");
    return await data.text();
  } catch (error) {
    console.log(error);
    return "";
  }
}

export default async function Page() {
  const data = await getApi();

  return (
    <>
      <Header text="Web" />
      <div>API: {data}</div>
      <Button />
    </>
  );
}
