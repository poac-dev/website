import { getHasuraClient } from "../_lib/hasuraClient";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const name = searchParams.get("q");
    const page = Number(searchParams.get("page") ?? 1);
    const perPage = Number(searchParams.get("perPage") ?? 10);

    const hasuraClient = getHasuraClient();
    const data = await hasuraClient.searchPackages({
        name: `%${name}%`,
        limit: perPage,
        offset: (page - 1) * perPage,
    });
    console.log("GET /search/api:", data);

    return Response.json(data);
}
