import { UserCircleIcon } from "@heroicons/react/outline";
import Navbar from "./Navbar";
import React from "react";

function Home() {
  return (
    <div className="min-h-screen bg-default pb-14 ">
      {/*Navbar*/}
      <Navbar page="Home" />

      <div className=" pt-3 ">
        <div className="px-8 mx-auto max-w-[100rem]">
          <div className="px-8 my-8 md:my-0 bg-white drop-shadow-lg rounded-lg">
            <header className=" py-6 font-exo headerbold tracking-tight text-headermaroon  w-[100%] border-b-2 border-bordermaroon grid grid-cols-1 md:grid-cols-2">
              <div className="flex md:justify-start text-4xl my-auto">
                Sample Article
              </div>
              <div className="flex md:justify-end text-2xl md:text-3xl mt-4 md:mt-0 my-auto">
                By: Sharabh Ojha
              </div>
            </header>

            <div className="font-quicksand py-8 text-xl">
              <p className="py-4">
                The classic Christmas tale, A Christmas Carol, by Charels
                Dickens was one that brought joy to many hearts. The story is
                now famous internationally and taught many people very important
                life lessons. The novella was first published in 1843. It is a
                book that you can read in under two hours, which is unlike many
                books written by Charles Dickens.
              </p>

              <p className="py-4">
                It starts with a mean-spirited old man named Ebenezer Scrooge.
                Scrooge values money more than people. He sits in his
                counting-house on Christmas Eve with his clerk, Bob Cratchit.
                Later in the day Scrooges nephew, Fred, pays a visit and invites
                him to his annual Christmas party. The two gentlemen ask Scrooge
                for charity money for the poor. Scrooge reacts to the holiday
                visitors with bitterness and then grumbles Bah! Humbug! in
                response to Merry Christmas!{" "}
              </p>

              <p className="py-4">
                After work he returns to his dark, empty apartment. Scrooge
                receives a visit from the ghost of his dead partner, Jacob
                Marley. Marley was a bad person, and as punishment for his
                greedy and self-serving life, his spirit has been sentenced to
                wander the Earth weighted down with heavy chains. Marley hopes
                to save Scrooge from sharing the same fate. Marley informs
                Scrooge that three spirits will visit him.
              </p>

              <p className="py-4">
                First he meets The Ghost of Christmas Past, then The Ghost of
                Christmas Present, and lastly The Ghost of Christmas Future.
                Each gives him a lesson to change Scrooges point of view of
                Christmas. The spirits give the mean man a chance to change his
                ways by haunting him with a little persuasion.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
