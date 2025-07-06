function test() {
  return new Promise((resolve) => {
    setTimeout(resolve, 3000);
  });
}

export default async function Page() {
  await test();

  return <div> test/da page </div>;
}
