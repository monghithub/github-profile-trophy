export default (request: Request) => {
  const hasToken1 = !!Deno.env.get("GITHUB_TOKEN1");
  const hasToken2 = !!Deno.env.get("GITHUB_TOKEN2");
  const tokenPrefix = Deno.env.get("GITHUB_TOKEN1")?.substring(0, 4) || "EMPTY";
  const allKeys = [...Deno.env.toObject()].length;

  return new Response(
    JSON.stringify({
      hasToken1,
      hasToken2,
      tokenPrefix,
      envVarCount: allKeys,
    }),
    {
      headers: { "Content-Type": "application/json" },
    },
  );
};
