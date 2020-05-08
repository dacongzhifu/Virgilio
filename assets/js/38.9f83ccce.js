(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{373:function(e,t,a){"use strict";a.r(t);var i=a(33),o=Object(i.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"machine-learning-use-cases"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#machine-learning-use-cases"}},[e._v("#")]),e._v(" Machine Learning Use Cases")]),e._v(" "),a("h1",{attrs:{id:"what-you-will-learn"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-you-will-learn"}},[e._v("#")]),e._v(" What you will learn")]),e._v(" "),a("p",[e._v("The purpose of this guide is to give a high-level overview of the various\ncases of application of ML techniques (and in particular Deep Learning) in the various industries and fields.")]),e._v(" "),a("h2",{attrs:{id:"prerequisites"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[e._v("#")]),e._v(" Prerequisites")]),e._v(" "),a("p",[e._v("It is recommended to read the guides of Paradiso preceding this one, but it is not necessary.")]),e._v(" "),a("h2",{attrs:{id:"time-to-complete"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#time-to-complete"}},[e._v("#")]),e._v(" Time to complete")]),e._v(" "),a("p",[e._v("20 minutes.")]),e._v(" "),a("h1",{attrs:{id:"index"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#index"}},[e._v("#")]),e._v(" Index")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#The-big-picture"}},[e._v("The big picture")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#From-research-to-industry"}},[e._v("From research to industry")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#Use-cases-examples"}},[e._v("Use cases examples")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#Sinergy-with-other-technological-trends"}},[e._v("Sinergy with other technological trends")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#Conclusions"}},[e._v("Conclusions")])])]),e._v(" "),a("p",[e._v("Let's dive right in!")]),e._v(" "),a("h3",{attrs:{id:"the-big-picture"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#the-big-picture"}},[e._v("#")]),e._v(" The big picture")]),e._v(" "),a("p",[e._v("Machine Learning systems and in particular Deep Learning, have made huge evolutionary steps and have improved a lot in the last five years, especially for the large amount of data available but especially for the availability of high-performance infrastructure (CPU and GPU in particular).")]),e._v(" "),a("p",[e._v("In the field of Artificial Intelligence research, automatic learning has been very successful in recent years, allowing computers to overcome or approach the corresponding human performance in areas ranging from facial recognition to speech and language recognition. Deep learning, on the other hand, allows computers to take a step forward, in particular to solve a series of complex problems.")]),e._v(" "),a("p",[e._v("Most of the "),a("a",{attrs:{href:"https://blog.aimultiple.com/ai-is-already-at-the-heart-of-google/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Google services"),a("OutboundLink")],1),e._v(" running on your deviced are powered by some Machine Learnig system!")]),e._v(" "),a("p",[e._v("Let's have a look at 3 simple cases:")]),e._v(" "),a("p",[a("strong",[e._v("First case")]),e._v(": speech-to-text processing of a phone call.")]),e._v(" "),a("p",[e._v("In this case, what I want to do is to translate an audio call into text. In the past, this was attempted using preset programs, but only the use of IA has allowed for optimal results.")]),e._v(" "),a("p",[e._v("The service is normally offered by the big players (Google, Microsoft, Amazon etc.) who have trained the model with millions of sentences; they make it available through API, that is through a service. In this case, the company interfaces by providing the audio file and the service responds in real time with a text.")]),e._v(" "),a("p",[e._v("In this case, the company buys the service it uses.")]),e._v(" "),a("p",[e._v("Once you have obtained the text on it you can perform several operations: a semantic or lexical analysis, a translation possibly followed by a speech-to-text in order to hear the phone call in another language; these are evolutions that for now we do not go into.")]),e._v(" "),a("p",[a("strong",[e._v("Second case")]),e._v(": recognition of an object in a photo or video.")]),e._v(" "),a("p",[e._v("It is only an evolution of the previous service; this time we provide the purchased service with an image, or a video, receiving in response an on/off when an object is recognized or a classification of the object itself; it depends on the compatibility between the trained model and the request that is made.")]),e._v(" "),a("p",[a("strong",[e._v("Third case")]),e._v(": optimization of inbound calls of a call center")]),e._v(" "),a("p",[e._v("In the previous cases the trained model belonged to the external supplier; this does not prohibit, however, that the model is instead built internally. More resources would be needed, both in terms of conversations/images available and in terms of specific knowledge.")]),e._v(" "),a("p",[e._v("In this third case, instead, we hypothesize the internal construction of an artificial intelligence model; the case is much more interesting because it allows the company to maintain the data and the entire process of building the AI internally.")]),e._v(" "),a("p",[e._v("We must assume that the company in question has at its disposal the history of all the calls received, divided into the individual steps made by the operator; with them we must be able to build a chain of events that have led to a final solution. Technically, these are Markov chains, from the late 19th century mathematician who first studied and codified them.")]),e._v(" "),a("p",[e._v("Having a large number of these chains at our disposal, we train a model according to IA algorithms; it is necessary to have specific competence at this point to understand which is the most suitable algorithm and the calibration of the parameters necessary to obtain the best result. It is often at this point that the best intentions collapse; it is not enough to feed the data to any model, it is necessary to identify and calibrate the right model.")]),e._v(" "),a("p",[e._v("Once the model has been trained, it is made available to the call centre; once the call has been received and the first step has been taken, we will probably already have the next step available; after the second step, the probability of 'guessing' the next step will be even higher, and so on, optimising the process.")]),e._v(" "),a("p",[e._v("This example can be applied to all cases where there is a sequence of events:")]),e._v(" "),a("ul",[a("li",[e._v("Actions of a user on the site to predict whether he will buy a product or not")]),e._v(" "),a("li",[e._v("Analysis of random movements to predict the next event")]),e._v(" "),a("li",[e._v("Fault/defect analysis to recognize the probability of failure from the current operation")]),e._v(" "),a("li",[e._v("Analysis of behaviour to predict criminal phenomena (Minority report?)")])]),e._v(" "),a("p",[e._v("From these examples it can be understood that the AI is a way to process data; there is no limit in the hypothesis of its use, if not in the ability of those who manage the data.")]),e._v(" "),a("h3",{attrs:{id:"from-research-to-industry"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#from-research-to-industry"}},[e._v("#")]),e._v(" From research to industry")]),e._v(" "),a("p",[e._v("The range of possible Machine Learning applications in real businesses "),a("strong",[e._v("is almost infinite")]),e._v(", starting from the themes of optimization of existing processes up to new revolutionize business models and customer interaction.")]),e._v(" "),a("p",[e._v('However, even though papers are published day after day in this field, which discover incredible methods of applying these techniques, they are not always "ready to use", and even if it is easy to find the '),a("a",{attrs:{href:"https://paperswithcode.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("code"),a("OutboundLink")],1),e._v(" of the paper, it is often not easy to implement them in real solutions, for lack of know-how, or even just awareness of the business.")]),e._v(" "),a("p",[e._v("It is difficult to keep up with both the state of the art of research and the actual use cases applied by others in the industry.")]),e._v(" "),a("p",[e._v("So, a very important issue is the close collaboration between research and industry, which becomes more and more important as research accelerates.")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://www.slideshare.net/StateofAIReport/state-of-ai-report-2019-151804430",target:"_blank",rel:"noopener noreferrer"}},[e._v("Here's"),a("OutboundLink")],1),e._v(" a very good report about the state-of-the-art (SOTA) of Machine Learning and Deep Learning applications an research (up-to-date 2019).")]),e._v(" "),a("p",[e._v("Let's see explore now the use cases more in-depth.")]),e._v(" "),a("h3",{attrs:{id:"use-cases-examples"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#use-cases-examples"}},[e._v("#")]),e._v(" Use cases examples")]),e._v(" "),a("p",[e._v("As we argued, it is essential to have a framework of things you can do nowadays with certain tools, and understand if it is convenient in terms of ROI for a company (you manager, I talk to you)")]),e._v(" "),a("p",[e._v("We here at Virgilio are pleased to tell you that we are in close collaboration with "),a("a",{attrs:{href:"https://github.com/firmai",target:"_blank",rel:"noopener noreferrer"}},[e._v("Firm.ai"),a("OutboundLink")],1),e._v(", a spectacular OpenSource project that tries to solve the problem of providing an overview of all possible use cases, divided by industry.")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/firmai/industry-machine-learning",target:"_blank",rel:"noopener noreferrer"}},[a("strong",[e._v("In this project")]),a("OutboundLink")],1),e._v(", you can find a wide variety of applied use cases, with code! What an incredible resource!")]),e._v(" "),a("p",[e._v("I recommend, leave a star to the Firm.ai project and follow it, it's a work in progress that will be continuously updated.")]),e._v(" "),a("p",[e._v("Don't you find what you're looking for in the previous link? Try "),a("a",{attrs:{href:"https://appliedai.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1),e._v(". You can enter the business you are looking for, and also see which companies provide services that might be useful to you!")]),e._v(" "),a("p",[e._v("As you can see, the space of possibilities is really wide. However, thinking about the possible application of Machine Learning, it would be foolish not to take into account the synergies that they have with other technological trends that are rapidly emerging, and that will certainly revolutionize the industry as we know it.")]),e._v(" "),a("p",[a("strong",[e._v("Any kind of industry!")])]),e._v(" "),a("h3",{attrs:{id:"sinergy-with-other-technological-trends"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sinergy-with-other-technological-trends"}},[e._v("#")]),e._v(" Sinergy with other technological trends")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("There are strong synergies between AI and IoT. Combine AI with an IoT network (e.g.,\nsensors installed in the soil owned by an agricultural enterprise, or wearable worn\nfrom patients, able to collect and send data to the treating physician) means in many cases\ncases multiply the potential of AI exponentially. The size and complexity\nof the information generated by this new network of objects is such that only one\nadvanced AI system will be able to manage it efficiently. This advanced system will be able to\ntake various configurations, both centralized (as in the case of supercomputers\naccessible via the cloud) or distributed (so-called on-device AI, supported by the modern\nedge computing technologies).")])]),e._v(" "),a("li",[a("p",[e._v("AI and 5G connectivity form a disruptive combination. The 5G, that is the network of fifth\ngeneration, will officially arrive from 2020 and will allow to connect the\nmillions of devices worldwide at high speed and with low latency, opening up\nthe doors to the creation of new application scenarios, hitherto not feasible, on\na single global nervous system in different industrial sectors. 5G networks will be able to\nbe managed through different techniques of machine learning, which translate into\nself-diagnosis, self-configuration, self-optimisation, self-repair, self-protection2\n. AI and 5G put the network at the service of the user thanks to the edge\ncomputing and its intrinsic characteristics of hyper-distributed and hyper-connected computational model.")])]),e._v(" "),a("li",[a("p",[e._v("With the spread of distributed ledger technologies (of which the blockchain is a case of the\nspecific) and in particular of smart contracts, the role of Artificial Intelligence\nwill become even more relevant. The decentralised nature of these technologies and the\npossibility of validating the data collected by them allows to improve\nThe accuracy of AI systems, as well as to distribute the computing power over multiple nodes,\npotentially reducing the costs and therefore the accessibility of the technology.")])]),e._v(" "),a("li",[a("p",[e._v("The enabling factor of the AI par excellence is Cloud Computing: it is a\ntechnology that allows you to take advantage, via remote service, of hardware resources and\nsoftware services - such as mass storage for data storage or power of\nAccessory calculation - the use of which is offered as a service by a provider. Solutions\nAI can be maintained on local data centers - even individual servers: this phenomenon is opening the door to hybrid scenarios that allow the use of this\ntechnology even under poor connectivity conditions or other restrictions.")])])]),e._v(" "),a("p",[e._v("Being able to combine the understanding of different but interconnected trends is essential to have an overview of the next (already started) industrial revolution.")]),e._v(" "),a("h3",{attrs:{id:"conclusions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#conclusions"}},[e._v("#")]),e._v(" Conclusions")]),e._v(" "),a("p",[e._v("In this guide we have seen what are the possible cases of use of Machine Learning nowadays, and we have proposed various sources of information through which we will remain updated on new applications.")]),e._v(" "),a("p",[e._v("We would also like to remind you that if you are aware of any use cases not included in these lists, the authors will be more than happy to receive a suggestion and add it.")]),e._v(" "),a("p",[e._v("Have an happy exploration!")]),e._v(" "),a("hr"),e._v(" "),a("p",[e._v("Written by "),a("a",{attrs:{href:"https://github.com/clone95",target:"_blank",rel:"noopener noreferrer"}},[a("em",[e._v("clone95")]),a("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=o.exports}}]);