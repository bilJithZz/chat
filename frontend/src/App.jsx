import React from 'react';
import './App.css';
import { Button } from './components/ui/button';
import { Input } from "@/components/ui/input"
import { useToast } from "@/hooks/use-toast"
import { Toggle } from "@/components/ui/toggle"
import { Textarea } from "@/components/ui/textarea"
import { Toaster } from "@/components/ui/toaster"



function App() {

  const { toast } = useToast()

  return (
    <div className=" bg-red-800 w-screen  h-screen flex">
     <div className="flex  max-w-sm  space-x-2">
     <Textarea className="h-10 rounded-lg" placeholder="Type your message here." >
    
     </Textarea>
     <Button  onClick={() => {
        toast({
          title: "Scheduled: Catch up",
          description: "Friday, February 10, 2023 at 5:57 PM",
        })
      }}  type="submit">Subscribe</Button>
     
      <Toggle>Toggle</Toggle>

      <Toaster />
    </div>
    </div>
  );
}

export default App;
