Welcome to asig's webapp.
------------------------------------------------------------------
							USAGE
------------------------------------------------------------------
Because of cross-origin, you need to run a webserver locally
to get any useful testing/scaffolding done.

Easy way:
	* Install nodejs
	* Verify npm (node package manager) is on your computer
	* Run npm install -g http-server
	* Go into Asig/
	* Run http-server

Hard way:
	* Install nodejs
	* Make & run your own node server (I'll get around to that...)
------------------------------------------------------------------
						DESIGN STUFF
------------------------------------------------------------------
Layout:

Overview:
Homepage - About - Brotherhood - Alumni (In-the-Works) - Events

Drilldown:
	*Homepage
		- Map to frat
		- contact info
		- Join form (adds to email list?)
	*About
		- Local history
		- National history
	* Brotherhood
		- Officers
		- Pictures of happy fun times (yet to be found)
	* Alumni - Not crazy about this tab.
		- Newsletter (naaaaaaaaah im not doing that)
		- List of alumns? meh.
	* Events
		- Rush (recommending right now that we put that up front)
		- Sports
		- Parties
		- Alum & Ritual events
	* Donate
		- Funding details with goals & Paypal button

More covered in the design docs folder.

------------------------------------------------------------------
						TECHNICAL STUFF
------------------------------------------------------------------

Dependencies (Already included, but good to know if you wanna dig):
	*Bootstrap
	*Angularjs
	*AngularUI (ui-router to be specific)

