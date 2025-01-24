import React from 'react'

function FooterComponent() {
  return (
    <footer className="bg-blue-800 text-white text-center p-4">
        <div>
            <p>Project work made with React+Tailwind</p>
            <div className="flex flex-row justify-center space-x-4 pt-2">

                <a href="https://github.com/Simone-Fratini" target="_blank" className="text-blue-200 hover:underline">
                  Simone Fratini
                </a>
                <a href="https://github.com/Aj-Herrera-99" target="_blank" className="text-blue-200 hover:underline">
                  Ajhay Herrera
                </a>
                <a href="https://github.com/AndySMT" target="_blank" className="text-blue-200 hover:underline">
                  Andy Simota
                </a>
                <a href="https://github.com/Abraxas-7" target="_blank" className="text-blue-200 hover:underline">
                  Arber Beshaj
                </a>
                <a href="https://github.com/aandrea-boatoo" target="_blank" className="text-blue-200 hover:underline">
                  Andrea Boato
                </a>
            </div>

        </div>
        <div className="container mx-auto pt-3">
            <p className="text-sm">&copy; 2025 Boolean Book-Shop. All rights reserved.</p>
        </div>
        
    </footer>

  )
}

export default FooterComponent