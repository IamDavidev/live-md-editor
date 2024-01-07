// DO NOT EDIT. This file is generated by Fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import * as $_404 from "./routes/_404.tsx";
import * as $_app from "./routes/_app.tsx";
import * as $api_joke from "./routes/api/joke.ts";
import * as $api_listen_room from "./routes/api/listen-room.ts";
import * as $api_update_doc from "./routes/api/update-doc.ts";
import * as $editor_index from "./routes/editor/index.tsx";
import * as $editor_room_roomId_ from "./routes/editor/room/[roomId].tsx";
import * as $editor_room_create from "./routes/editor/room/create.tsx";
import * as $greet_name_ from "./routes/greet/[name].tsx";
import * as $index from "./routes/index.tsx";
import * as $room from "./islands/room.tsx";
import { type Manifest } from "$fresh/server.ts";

const manifest = {
  routes: {
    "./routes/_404.tsx": $_404,
    "./routes/_app.tsx": $_app,
    "./routes/api/joke.ts": $api_joke,
    "./routes/api/listen-room.ts": $api_listen_room,
    "./routes/api/update-doc.ts": $api_update_doc,
    "./routes/editor/index.tsx": $editor_index,
    "./routes/editor/room/[roomId].tsx": $editor_room_roomId_,
    "./routes/editor/room/create.tsx": $editor_room_create,
    "./routes/greet/[name].tsx": $greet_name_,
    "./routes/index.tsx": $index,
  },
  islands: {
    "./islands/room.tsx": $room,
  },
  baseUrl: import.meta.url,
} satisfies Manifest;

export default manifest;
