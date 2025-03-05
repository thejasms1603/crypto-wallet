"use client";
import React, { useState } from "react";
import { generateMnemonic } from "bip39";
import MagicButton from "./BorderMagic";
import { CopyIcon, PlusIcon } from "lucide-react";
import { Button } from "./ui/button";

const MnemonicDisplay = () => {
  const [mnemonicWords, setMnemonicWords] = useState<string[]>(
    Array(12).fill(" ")
  );
  const [showMnemonic, setShowMnemonic] = useState(false);

  const mnemonicGeneration = async () => {
    const mn = await generateMnemonic();
    const words = mn.split(" ");
    setMnemonicWords(words);
    setShowMnemonic(true);
  };

  return (
    <div className='flex flex-col p-4'>
      <div className='flex justify-between items-center px-4 py-2'>
        <h1 className='font-extrabold tracking-tight text-3xl'>
          Generate your Wallet
        </h1>
        <MagicButton onClick={mnemonicGeneration}>
          Create Seed Phrase <PlusIcon />
        </MagicButton>
      </div>

      {showMnemonic && (
        <div className='flex flex-col w-full items-center justify-center'>
          <h1 className='font-extrabold text-2xl'>Mnemonic Phrase</h1>
          <p className='font-normal text-gray-700 dark:text-gray-400'>
            Keep it Safe
          </p>
          <div className='grid grid-cols-1 sm:grid-cols-3 gap-2 mt-4'>
            {mnemonicWords.map((mnemonic, ind) => (
              <div
                key={ind}
                className='border-2 bg-gray-200 rounded-lg px-3 py-2 text-center'
              >
                <p className='text-black'>{mnemonic}</p>
              </div>
            ))}
          </div>
          <Button className='mt-3' size='default' variant='secondary'>
            Copy to Clipboard <CopyIcon />
          </Button>
        </div>
      )}
    </div>
  );
};

export default MnemonicDisplay;
