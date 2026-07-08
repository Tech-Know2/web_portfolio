import { client } from "@/sanity/lib/client";
import TimelineComponent from "./timeline";

export default async function TimelineServer() {
    const events = await client.fetch(
        `*[_type == "timelineEvent"] | order(date desc){
            _id,
            title,
            description,
            date,
            hashtags,
            badge
        }`
    );

    return <TimelineComponent events={JSON.parse(JSON.stringify(events))} />;
}