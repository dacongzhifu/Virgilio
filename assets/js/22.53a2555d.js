(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{354:function(e,t,a){"use strict";a.r(t);var i=a(33),n=Object(i.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"introduction-to-computer-vision-using-opencv-and-python"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#introduction-to-computer-vision-using-opencv-and-python"}},[e._v("#")]),e._v(" Introduction to Computer Vision using OpenCV and Python")]),e._v(" "),a("hr"),e._v(" "),a("p",[a("img",{attrs:{src:"https://i.ibb.co/L03Rvcq/introduction.jpg",alt:"Introduction"}})]),e._v(" "),a("p",[e._v("In this guide, we will introduce a brief overview of Deep Learning. Then, we will discuss the purpose of Computer Vision in Python. After that, we' ll be taught the basics of dealing with data using OpenCV libraries by creating and displaying images. The fundamental tasks of Computer Vision such as object recognition and semantic segmentation will be explained. We will also cover the process of feature extraction, edge and face detection and object classification..")]),e._v(" "),a("h2",{attrs:{id:"prerequisites"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[e._v("#")]),e._v(" Prerequisites")]),e._v(" "),a("p",[e._v("Before starting this guide, it is essential to be familiar with the basics of Python programming and Image Processing concepts.")]),e._v(" "),a("h2",{attrs:{id:"guide-map"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#guide-map"}},[e._v("#")]),e._v(" Guide map")]),e._v(" "),a("p",[e._v("We will provide a structured content according to the following map:")]),e._v(" "),a("ol",[a("li",[e._v("Introduction;")]),e._v(" "),a("li",[e._v("A brief introduction to Deep Learning;")]),e._v(" "),a("li",[e._v("Computer vision tasks;")]),e._v(" "),a("li",[e._v("Computer Vision Systems;")]),e._v(" "),a("li",[e._v("Python libraries for Computer Vision;")]),e._v(" "),a("li",[e._v("OpenCV library on Windows and Ubuntu;")]),e._v(" "),a("li",[e._v("Processing images with OpenCV;")]),e._v(" "),a("li",[e._v("Use cases for Computer Vision;")]),e._v(" "),a("li",[e._v("Conclusion.")])]),e._v(" "),a("h2",{attrs:{id:"_1-introduction"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-introduction"}},[e._v("#")]),e._v(" 1.\tIntroduction:")]),e._v(" "),a("p",[e._v("Computer Vision is a branch of Computer Science, which aims to build up intelligent systems that can understand the content in images as they are perceived by humans. The data may be presented in different modalities such as sequential (video) images from multiple sensors (cameras) or multidimensional data from a biomedical camera, and so on. It is the discipline that integrates the methods of acquiring, processing, analyzing and understanding large-scale images from the real world. It is also about depicting and reconstructing the world that we perceive in images, such as edge, lighting, color and pattern. The recognition of images, by decoding them into meaningful information from image-based data using models created by engineering, physics, statistics and learning theories. It is intended to simulate human vision, including the ability to learn, make decisions and react to actions based on visual information. Computer Vision is one aspect of Artificial Intelligence and Image Processing, which generally aims to simulate intelligent human capabilities. In computer Vision concept, object recognition is one of the fundamental tasks, which depends on how these objects are defined, whether in the form of images or video sequences, and human beings are able to recognize many entities, even if these objects, which are images, vary greatly in size and lighting.")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://i.ibb.co/X5d74Ft/CVV.jpg",alt:"Computer Vision"}})]),e._v(" "),a("p",[e._v("Some examples of Computer Vision applications:")]),e._v(" "),a("ul",[a("li",[e._v("Any application that can recognize objects or humans in an image;")]),e._v(" "),a("li",[e._v("Automatic control applications (industrial robots, vehicles);")]),e._v(" "),a("li",[e._v("Object construction models (industrial inspection, medical image analysis);")]),e._v(" "),a("li",[e._v("Applications make it possible to track a moving object.")])]),e._v(" "),a("p",[e._v("Useful books for learning various aspects of Computer Vision: "),a("a",{attrs:{href:"http://www.robots.ox.ac.uk/~vgg/hzbook/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Multiple View Geometry in Computer Vision"),a("OutboundLink")],1),e._v(",  "),a("a",{attrs:{href:"http://szeliski.org/Book/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Computer Vision: Algorithms and Applications"),a("OutboundLink")],1)]),e._v(" "),a("h2",{attrs:{id:"_2-a-brief-introduction-to-deep-learning"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-a-brief-introduction-to-deep-learning"}},[e._v("#")]),e._v(" 2.\tA brief introduction to Deep Learning:")]),e._v(" "),a("p",[e._v("###2.1. What is Deep Learning?\nDeep Learning is an Machine Learning strategy that has greatly enhanced performance in many fields such as Computer Vision, Speech Recognition, Machine Tanslation, and so on.  The use of deep learning techniques, through raw data, allows many challenges to be solved in many economic sectors such as health, transport, finance, etc.")]),e._v(" "),a("p",[e._v("The favourable conditions that allowed the rise of Deep Learning:")]),e._v(" "),a("ul",[a("li",[e._v("Availability of very large spatio-temporal datasets (Big Data);")]),e._v(" "),a("li",[e._v("Availability of high-performance computing (GPU);")]),e._v(" "),a("li",[e._v("Flexibility of new training models (Deep Neural Networks).")])]),e._v(" "),a("p",[e._v("###2.2. Deep Learning Frameworks")]),e._v(" "),a("p",[e._v("In this section, we present the most popular frameworks for Deep Learning.")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Framework")]),e._v(" "),a("th",[e._v("Features")]),e._v(" "),a("th",[e._v("Supports languages")]),e._v(" "),a("th",[e._v("Download")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("Tensorflow")]),e._v(" "),a("td",[e._v("Highly flexible system architecture")]),e._v(" "),a("td",[e._v("Python, C++ and R")]),e._v(" "),a("td",[a("a",{attrs:{href:"https://www.tensorflow.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1)])]),e._v(" "),a("tr",[a("td",[e._v("Caffe")]),e._v(" "),a("td",[e._v("Speed, transposability and applicability in modelling Convolution Neural Networks (CNN)")]),e._v(" "),a("td",[e._v("C, C++, Python, MATLAB")]),e._v(" "),a("td",[a("a",{attrs:{href:"http://caffe.berkeleyvision.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1)])]),e._v(" "),a("tr",[a("td",[e._v("CNTK")]),e._v(" "),a("td",[e._v("Easy training and combination of popular model types across servers")]),e._v(" "),a("td",[e._v("Python, C++ and the Command Line Interface")]),e._v(" "),a("td",[a("a",{attrs:{href:"https://www.microsoft.com/en-us/cognitive-toolkit/",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1)])]),e._v(" "),a("tr",[a("td",[e._v("Torch/PyTorch")]),e._v(" "),a("td",[e._v("The entire deep modeling process is far more simpler as well as transparent")]),e._v(" "),a("td",[e._v("Lua, Python")]),e._v(" "),a("td",[a("a",{attrs:{href:"http://torch.ch/",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1),e._v(" or "),a("a",{attrs:{href:"http://pytorch.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1)])]),e._v(" "),a("tr",[a("td",[e._v("Keras")]),e._v(" "),a("td",[e._v("Provide a simplistic interface for the purpose of quick prototyping by constructing effective neural networks that can work with TensorFlow")]),e._v(" "),a("td",[e._v("Python")]),e._v(" "),a("td",[a("a",{attrs:{href:"https://keras.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1)])])])]),e._v(" "),a("p",[e._v("##3.\tComputer vision tasks:")]),e._v(" "),a("p",[e._v("In this section, we will successively examine some tasks of Computer Vision, in particular Image Recognition, Semantic Segmentation, Image Retrieval, Image Restoration, Object Recognition, Video Tracking, and so on.")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://i.ibb.co/NxVsrHf/cvt.jpg",alt:"CV tasks"}})]),e._v(" "),a("p",[e._v("###3.1.\t Image Recognition")]),e._v(" "),a("p",[e._v("Traditionally, Computer Vision is about deciding whether or not the image contains an object. This task can be solved simply with little effort by human beings, but a certain activity is still not solved effectively and finely by computer in its general state. The only way to solve this issue is to find the best solutions to match certain features (edges, shapes, etc), and in some cases only, often with specific lighting conditions, a background and a certain position for the camera.")]),e._v(" "),a("p",[e._v("####Types of recognition:")]),e._v(" "),a("p",[a("strong",[e._v("A - Identification:")]),e._v("\nPredefined objects are often identified from different viewpoints of the camera in their different locations.")]),e._v(" "),a("p",[a("strong",[e._v("B - Selection:")]),e._v("\nDefine a unique identifier in the shape. For example: identify a person's face or identify the specific type of a person or car.")]),e._v(" "),a("p",[a("strong",[e._v("C - Examination:")]),e._v("\nImage data is treated for a specific object. For example: check for the presence of diseased cells in medical form, check if a car is present on a highway.")]),e._v(" "),a("p",[e._v("You will find here some projects and scripts based on Image Recognition task using a Deep Learning paradigm:")]),e._v(" "),a("ul",[a("li",[e._v("Fast MPN-COV: "),a("a",{attrs:{href:"https://github.com/jiangtaoxie/fast-MPN-COV",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1),e._v(";")]),e._v(" "),a("li",[e._v("Fine-Grained Representation Learning and Recognition by Exploiting Hierarchical Semantic Embedding: "),a("a",{attrs:{href:"https://github.com/HCPLab-SYSU/HSE",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1),e._v(";")]),e._v(" "),a("li",[e._v("Fine grained classification: "),a("a",{attrs:{href:"https://github.com/xcnkx/fine_grained_classification",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1),e._v(".")])]),e._v(" "),a("p",[e._v("###3.2.\tImage Retrieval:\nImages stored in a visual dataset are retrieved based on the content as well as similar concepts of the database query where an image is inserted, and the output is a similar set of images. Content-based visual information retrieval is the implementation of the computer vision system in order to target images, i.e. the problem of retrieving images from large datasets. Image retrieval systems seek to find images similar to a query image among a dataset. The following figure represents the general process of retrieving images from content.")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://i.ibb.co/VTLpZgD/SFS.jpg",alt:"Image retrieval"}})]),e._v(" "),a("p",[e._v("You will find here some projects and scripts based on Image Retrieval tasks using a Deep Learning paradigm:")]),e._v(" "),a("ul",[a("li",[e._v("Deep Local Feature (DeLF): "),a("a",{attrs:{href:"https://github.com/nashory/DeLF-pytorch",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1),e._v(";")]),e._v(" "),a("li",[e._v("MILDNet: "),a("a",{attrs:{href:"https://github.com/gofynd/mildnet",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1),e._v(";")]),e._v(" "),a("li",[e._v("MultiGrain: "),a("a",{attrs:{href:"https://github.com/facebookresearch/multigrain",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1),e._v(".")])]),e._v(" "),a("p",[e._v("###3.3.\tImage Restoration:\nThis is the process of restoring degraded images that cannot be recovered. Original images can be restored by prior-knowledge of damage or distortions that cause deterioration of images such as scratches, dust and stains. Restoration also includes images taken by sophisticated cameras that have been distorted due to the weather conditions in which they were taken, such as scanned images.")]),e._v(" "),a("p",[e._v("You will find here some projects and scripts based on Image Restoration task using a Deep Learning paradigm:")]),e._v(" "),a("ul",[a("li",[e._v("Image Super Resolution using in Keras 2+: "),a("a",{attrs:{href:"https://github.com/titu1994/Image-Super-Resolution",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1),e._v(";")]),e._v(" "),a("li",[e._v("RED-net: "),a("a",{attrs:{href:"https://github.com/ved27/RED-net",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1),e._v(";")]),e._v(" "),a("li",[e._v("Noise2Noise: "),a("a",{attrs:{href:"https://github.com/NVlabs/noise2noise",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1),e._v(".")])]),e._v(" "),a("p",[e._v("###3.4.\tObject Recognition:\nIt is a branch of Computer Vision dedicated to the detection of a particular object in an image or video. Humans can recognize many objects in images with little effort, although the image may differ slightly from different aspects, such as variations, or even when they are moved or rotated. Although humans can recognize objects when they are partially hidden, this task remains a challenge for computer vision systems. The  object recognition process is given by the following figure:")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://www.mathworks.com/content/mathworks/www/en/solutions/deep-learning/object-recognition/jcr:content/mainParsys/band_copy_1227855798_2052140687/mainParsys/columns_1606542234/2/image_copy_copy_copy.adapt.full.low.svg/1541451136966.svg",alt:"Object recognition"}})]),e._v(" "),a("p",[e._v("Unlike Machine Learning, the Deep Learning paradigm consists of an end-to-end feature representation learning from raw data without any prior data processing steps.")]),e._v(" "),a("p",[e._v("You will find here some projects and scripts based on Object Recognition task using a Deep Learning paradigm:")]),e._v(" "),a("ul",[a("li",[e._v("TF-slim: "),a("a",{attrs:{href:"https://github.com/tensorflow/models/tree/master/research/slim",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1),e._v(";")]),e._v(" "),a("li",[e._v("DenseNet: "),a("a",{attrs:{href:"https://github.com/liuzhuang13/DenseNet",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1),e._v(";")]),e._v(" "),a("li",[e._v("DeepBeliefSDK: "),a("a",{attrs:{href:"https://github.com/jetpacapp/DeepBeliefSDK",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1),e._v(".")])]),e._v(" "),a("p",[e._v("###3.5. Semantic Segmentation\nSemantic segmentation is a Deep Learning algorithm that assigns a label or category for each pixel in an image. It makes it possible to recognize a set of pixels that are in distinct classes. For example, an autonomous vehicle must be able to recognize vehicles, pedestrians, traffic signs, sidewalks and other environmental components of the road network. Semantic segmentation is involved in a wide range of solutions such as computer-controlled driving, autonomous vehicles, diagnostic imaging, industrial controls, and so on. The splitting of images into two classes is a simple example of semantic segmentation. In fact, it has no restriction in terms of categories. The number of classes can be changed in order to classify image content. For example, the image could be segmented into 4 classes: person, sky, sea and background. The example in the following figure is based on ICCV 2015 paper "),a("a",{attrs:{href:"http://www.robots.ox.ac.uk/~szheng/papers/CRFasRNN.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("Conditional Random Fields as Recurrent Neural Networks"),a("OutboundLink")],1),e._v(", which utilizes deep learning techniques and probabilistic graphical models for semantic image segmentation.")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://i.ibb.co/gdWgGd4/ss.jpg",alt:"Semantic Segmentation"}})]),e._v(" "),a("p",[e._v("You will find here some projects and scripts based on Semantic Segmentation task using a Deep Learning paradigm:")]),e._v(" "),a("ul",[a("li",[e._v("PSPNet: "),a("a",{attrs:{href:"https://github.com/hszhao/PSPNet",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1),e._v(";")]),e._v(" "),a("li",[e._v("TorchSeg: "),a("a",{attrs:{href:"https://github.com/ycszen/TorchSeg",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1),e._v(";")]),e._v(" "),a("li",[e._v("Deeplab: "),a("a",{attrs:{href:"https://github.com/tensorflow/models/tree/master/research/deeplab",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1),e._v(".")])]),e._v(" "),a("p",[e._v("###3.6.\tVideo Tracking\nIt is the process of locating or tracking a moving object (or several moving objects) using static or mobile cameras, while having many uses, such as human-computer interaction, security, three-dimensional reality, medical images and video editing. Tracking can be time-consuming due to video content and the need to use complex algorithms to identify and track objects.\nTracking aims to follow the desired object to be tracked in a sequence of successive images. Tracking is a difficult task when this object moves faster than the capture-rate of these successive images. It is even more difficult when this entity changes direction as it shifts. For this reason, tracking systems apply a motion model that explains how this object's image will change as it moves in different directions. The following figure illustrates the overall scheme of the object tracking process:")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://i.ibb.co/hY5GhdB/track.jpg",alt:"Object Tracking"}})]),e._v(" "),a("p",[e._v("You will find here some projects and scripts based on Video Tracking task using a Deep Learning paradigm:")]),e._v(" "),a("ul",[a("li",[e._v("GOT-10k Python Toolkit: "),a("a",{attrs:{href:"https://github.com/got-10k/toolkit",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1),e._v(";")]),e._v(" "),a("li",[e._v("SiamMask: "),a("a",{attrs:{href:"https://github.com/foolwood/SiamMask",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1),e._v(";")]),e._v(" "),a("li",[e._v("Deep SORT: "),a("a",{attrs:{href:"https://github.com/guanfuchen/deep_sort",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1),e._v(";")]),e._v(" "),a("li",[e._v("Object tracking (tutorial): "),a("a",{attrs:{href:"https://www.pyimagesearch.com/2018/07/30/opencv-object-tracking/",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1),e._v(".")])]),e._v(" "),a("p",[e._v("##4.\tComputer Vision Systems\nComputer vision systems are very diverse and are divided into large and sophisticated systems that perform general and complete tasks as well as small systems that perform specific and simple ones. Most computer vision systems mainly include the following:")]),e._v(" "),a("h3",{attrs:{id:"_4-1-collecting-images"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-collecting-images"}},[e._v("#")]),e._v(" 4.1.\tCollecting images")]),e._v(" "),a("p",[e._v("The image is generated by using one or more image sensors. These include many digital camera sensors, distance sensors, radars, and ultrasonic cameras.")]),e._v(" "),a("p",[e._v("###4.2.\tPre-processing operations")]),e._v(" "),a("p",[e._v("Before applying the computer vision algorithm in order to extract valuable information, it is necessary to perform prior data operations to ensure that the data are consistent with the algorithm's specific hypotheses. Some examples of these processes include:")]),e._v(" "),a("ol",[a("li",[e._v("Select the image resolution to confirm that its coordinate system is correct.")]),e._v(" "),a("li",[e._v("Reduce the interference to ensure that the sensor does not provide inaccurate information.")]),e._v(" "),a("li",[e._v("Increase the variance in order to ensure that the required information will be available.")])]),e._v(" "),a("p",[e._v("###4.3.\tFeatures extraction")]),e._v(" "),a("p",[e._v("Visual data features are extracted at different levels of abstraction from data raw. These benchmarks are categorized into:")]),e._v(" "),a("ol",[a("li",[e._v("Global features such as color and shape.")]),e._v(" "),a("li",[e._v("Local features such as edges and points.\nMore complex features related to colors and patterns can be obtained.")])]),e._v(" "),a("p",[e._v("###4.4.\tSegmentation\nAll zones of the image can be recognized as important locations for subsequent operations. For example: select a set of key points, divide one or more images that contain the region of interest.\n3.5.\tHigh-level processing operations\nAt this stage, the input data consists of a small set of data, such as a set of points or a portion of the image that is suspected to contain the interest object. The other operations are:")]),e._v(" "),a("ol",[a("li",[e._v("Ensure that the collected data are consistent with the hypotheses of the intended application.")]),e._v(" "),a("li",[e._v("Evaluate the transaction values assigned to the request, such as steering or shape size.")]),e._v(" "),a("li",[e._v("Classify the recognized objects into several classes")])]),e._v(" "),a("p",[e._v("##5.\tPython libraries for Computer Vision\nThe main toolkits for image processing in python are OpenCV, scikit-image and Pillow. The most general Python libraries (Numpy and Scipy) also provide some image processing tools. All these libraries can easily dialog with each other due to the common use of Numpy arrays to store images. A grayscale image is usually stored in a 2-dimensional integer or real value Numpy array with H rows and W columns (W=width,H=height). A color image is stored in a 3-dimensional Numpy array (H, W, 3).")]),e._v(" "),a("ul",[a("li",[e._v("OpenCV is a library that is written in C++, which is rich and widely used in computer vision.")]),e._v(" "),a("li",[a("a",{attrs:{href:"http://pillow.readthedocs.org/en/latest/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Pillow"),a("OutboundLink")],1),e._v(" is a PIL Fork (Python IMage Library). It is a library that is specific to Python, but is mainly written in C. It allows basic operations to be performed on images including read/write, transformations, histograms, filtering.")]),e._v(" "),a("li",[a("a",{attrs:{href:"http://scikit-image.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Scikit-Imag"),a("OutboundLink")],1),e._v("e is a fairly recent and actively developed library. The advantage of this library is that it is written in Python and Cython (Python typed and compiled for acceleration) which makes it easy to read its code.")]),e._v(" "),a("li",[e._v("[Scipy.ndimage](http://docs.scipy.org/doc/scipy/reference/ndimage.\nhtm): Scipy's ndimage module provides a number of functions for shaping, interpolation, mathematical morphology and statistics.")])]),e._v(" "),a("p",[e._v("##6.\t\tOpenCV library on Windows and Ubuntu\nGary Bradsky started OpenCV at Intel in 1999. Compatible with a variety of languages such as C++, Python, etc., OpenCV-Python is an API that allows OpenCV to simultaneously release the power of Python and C++ API. In the case of Python, it is a library of binaries intended to address computer vision challenges. This library is based on NumPy and its array structures. That means we can also integrate it easily into other libraries such as SciPy and Matplotlib.")]),e._v(" "),a("p",[e._v("As we have explained previously, all operations on images are purely mathematical operations. But we can't say that programmers will do all these operations every time they use images, hence the development of OpenCV library, which includes functions that perform the most necessary operations in the images.")]),e._v(" "),a("p",[e._v("###Windows:\nIn order to download the Python program (x,y), click [here](https://python-xy.github.io/downloads.html, it’s possible to download each file individually).  First, download the following "),a("a",{attrs:{href:"https://drive.google.com/file/d/0B0kFf-FN5r9tS1EzSlppUGItNUU/view?usp=sharing",target:"_blank",rel:"noopener noreferrer"}},[e._v("file"),a("OutboundLink")],1),e._v(" which contains the collection of the OpenCV library. Then, install the python program (x,y) as shown in the figures:\n"),a("img",{attrs:{src:"https://i.ibb.co/WgLMMHs/122.png",alt:"Windows"}})]),e._v(" "),a("p",[e._v("###Ubuntu:\nThere are two ways to install OpenCV on Linux systems. The first one consists in installing pre-compiled files from repositories. For instance, in the case of the Ubuntu platform, it is sufficient to execute the following command:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("sudo apt-get install libopencv-dev python-opencv\n")])])]),a("p",[e._v("The second method consists in compiling the source files immediately beforehand (this method allows you to obtain the latest version of the library).")]),e._v(" "),a("p",[e._v("Open the terminal line and proceed as follows:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("sudo apt-get update \nsudo apt-get upgrade\nsudo apt-get install build-essential cmake git pkg-config\nsudo apt-get install libjpeg8-dev libtiff4-dev libjasper-dev libpng12-dev \nsudo apt-get install libatlas-base-dev gfortran\n# install Pip package \nwget https://bootstrap.pypa.io/get-pip.py \nsudo python get-pip.py\nsudo pip install virtualenv virtualenvwrapper \nsudo rm -rf ~/.cache/pip\n# virtualenv and virtualenvwrapper \nexport WORKON_HOME=$HOME/.virtualenvs source /usr/local/bin/virtualenvwrapper.sh\nsource ~/.bashrc\nmkvirtualenv cv\n# Install Python2.7 \nsudo apt-get install python2.7-dev\n# Install Numby libraries\npip install numpy\n# Download OpenCV library\n\ncd ~ \ngit clone https://github.com/Itseez/opencv.git \ncd opencv \ngit checkout 3.0.0\n\n")])])]),a("p",[e._v("After that, try downloading the opencv_contrib package. It will be used to use some features such as SIFT, SURF, which were in the OpenCV 2.4.2 library, and then deleted in OpenCV 3.0.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("cd ~ \ngit clone https://github.com/Itseez/opencv_contrib.git \ncd opencv_contrib\ngit checkout 3.0.0\ncd ~/opencv \nmkdir build \ncd build\ncmake -D CMAKE_BUILD_TYPE=RELEASE \\ -D CMAKE_INSTALL_PREFIX=/usr/local \\ -D INSTALL_C_EXAMPLES=ON \\ -D INSTALL_PYTHON_EXAMPLES=ON \\ -D OPENCV_EXTRA_MODULES_PATH=~/opencv_contrib/modules \\ -D BUILD_EXAMPLES=ON ..\nmake\nsudo make install\nsudo ldconfig\ncd ~/.virtualenvs/cv/lib/python2.7/site-packages/ \nln -s /usr/local/lib/python2.7/site-packages/cv2.so cv2.so\n\n\n")])])]),a("p",[e._v("##7. Processing images with OpenCV")]),e._v(" "),a("p",[e._v("Now we have successfully installed OpenCV, let's start by doing it.")]),e._v(" "),a("p",[e._v("###7.1. Reading images in Python")]),e._v(" "),a("p",[e._v("To read an image, we have the "),a("code",[e._v("imread ()")]),e._v(" function. It should be mentioned that previously, we have moved to the directory that contains the image.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("img = cv2.imread ('img.jpg')\n\n")])])]),a("p",[e._v("As an alternative, it is also possible to pass a value for a flag, which is the second argument")]),e._v(" "),a("p",[e._v("cv2.IMREAD_COLOR: For loading a color image by overlooking existing transparency;\ncv2.IMREAD_GRAYSCALE: For loading a grayscale image;\ncv2.IMREAD_UNCHANGED: For loading an image that includes an alpha channel\nIt is possible to use integers 1, 0 or -1:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("img = cv2. imread ('img.jpg', 0)\n\n")])])]),a("p",[e._v("Note that sending an invalid image path does not result in any errors.")]),e._v(" "),a("p",[e._v("###7.2. Displaying images in Python")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("cv2.imshow ()")]),e._v(" function enables to display an image in a frame that can be adjusted to its size. The first argument is the name of the frame and the second one is the image.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("\nimg = cv2. imread ('img.jpg')\ncv2.imshow('Images', img)\n")])])]),a("p",[e._v("Note that we have two frames at once as we have not attempted to title them in the same way. "),a("code",[e._v("cv2.destroyAllWindows ()")]),e._v(" function is another function that destroys all the frames that we have already created. "),a("code",[e._v("cv2.destroyWindow ()")]),e._v(" also destroys a specific frame.")]),e._v(" "),a("p",[e._v("###7.3. Creating images in Python")]),e._v(" "),a("p",[e._v("To do this, there is the "),a("code",[e._v("cv2.imwrite ()")]),e._v("function. The first argument is the file name and the second one is the image to be saved.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("cv2.imwrite('img_gray.png', img)\n\n")])])]),a("p",[e._v('This will store the grayscale image named "img_gray.png" in the current location.')]),e._v(" "),a("p",[e._v("###7.4. Displaying images using Matplotlib")]),e._v(" "),a("p",[e._v("By using "),a("a",{attrs:{href:"https://matplotlib.org/index.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Matplotlib"),a("OutboundLink")],1),e._v(" library, we can display that image.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('import matplotlib.pyplot as plt\nplt.imshow(img, cmap = "gray", interpolation = "bilinear")\nplt.xticks([]), pl.ticks ([])\n(([], ), ([], ))\nplt.display ()\n')])])]),a("p",[e._v("###7.5. Core operations on images")]),e._v(" "),a("p",[e._v("Let's now look at the basic operations applicable on the image.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("import cv2\nimg = cv2.imread ('img.jpg')\ny, x = 100,50\n")])])]),a("p",[e._v("Reading of color values at positions y, x:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("(b, g, r) = img[y,x]\n\n")])])]),a("p",[e._v("Region of interest at (x, y) whose dimensions are 100x100:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("roi = img[y:y+100,x:x+100] \ncv2.imshow ('image', img)\ncv2.imshow('ROI', roi)\n")])])]),a("p",[e._v("Pixelization of the new color :")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("\nroi[:,:]= (55,44,87) \ncv2.imshow('New image', img)\n")])])]),a("p",[e._v("##8. Use cases for Computer Vision\nIn this section, we will look at some tasks related to computer vision such as *edge detection, face detection, *feature detection and description, object classification performed by OpenCV and Python.")]),e._v(" "),a("p",[e._v("###8.1.Edge detection\nIn OpenCV we can choose only to display the edges of objects with the "),a("code",[e._v("Canny ()")]),e._v(" function:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("import numpy as np\nimg = cv2.imread('img.jpg')\ncv2.imwrite ('edge_img.jpg', cv2.Canny (img, 512, 415))\ncv2.imshow ('edges', cv2.imread('edge_img.jpg'))\n")])])]),a("p",[e._v("###8.2. Face detection")]),e._v(" "),a("p",[e._v("OpenCV will also enable to detect faces in images. Let's now use Haar's cascading classifier.")]),e._v(" "),a("p",[e._v("Now, there is one last point that we would really like to address, and that is the face detection. The Haar classifier is used. It is a matter of locating the position of faces in an image in order to standardize the size of the face area.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('import sys, os\nimport cv2\n  \ndef face_detection(image, image_out, show = False):\n    # Load the image in memory\n    img = cv2.imread(image)\n    # Load the face detection model\n    face_model = cv2.CascadeClassifier("haarcascade_frontalface_alt2.xml")\n     \n     \n    # detection of the face(s)\n    faces = face_model.detectMultiScale(img)\n     \n    # we place a bounding boxe around the faces\n    print ("number of faces", len(faces), "image size", img.shape, "image", image)\n    for face in faces:\n        cv2.rectangle(img, (face[0], face[1]), (face[0] + face[2], face[0] + face[3]), (255, 0, 0), 3)\n         \n    # we store the final result\n    cv2.imwrite(image_out, img)\n     \n    # to see the image, press ESC to exit\n    if show :\n        cv2.imshow("face",img)\n        if cv2.waitKey(5000) == 27: cv2.destroyWindow("face")\n   \nif __name__ == "__main__":\n    # wall lamp \n    for file in os.listdir("."") :\n        if file.startswith("face") : continues # already processed\n        if os.path.splitext(file)[-1].lower() in [".jpg",".jpeg",".png" ] :\n            face_detect (file, "face_" + file)\n')])])]),a("p",[e._v("As you can see, it drew a blue square (bounding boxe) around the face in the image.")]),e._v(" "),a("p",[e._v("###8.3.\tFeature Detection and Description\nIn this section, we will present a brief description of the SIFT (Scale-Invariant Feature Transform) algorithm.\nThe main idea of this approach is to transform an image into feature vectors (feature maps), which should ideally be invariant to geometric transformations (rotation and scaling). This involves the detection of interest points, which will make it possible to detect an object. The detection of these points leads to the implementation of feature vectors whose components are specific to the point under consideration.")]),e._v(" "),a("p",[a("em",[a("strong",[e._v("SIFT in OpenCV and Python:")])])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("import cv2\nimport numpy as np\n\nimg = cv2.imread('my_img.jpg')\ngray= cv2.cvtColor(img,cv2.COLOR_BGR2GRAY)\n\nsift = cv2.SIFT()\nkp = sift.detect(gray,None)\n\nimg=cv2.drawKeypoints(gray,kp)\n\ncv2.imwrite('sift_img.jpg',img)\n\n")])])]),a("p",[e._v("###8.4.\tObject Classification\nTo correctly identify an object in an image, it may be interesting to simply detect its edges and shapes when extracting features.\nHow will we proceed to recognize objects?\nThese are the 3 steps that we will perform: (1) extracting features in the image, (2) estimating each feature and (3) classifying of edges.")]),e._v(" "),a("ul",[a("li",[e._v("Let's start by importing and loading an image.")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("import numpy as np \nimport cv2 \nimage = cv2.imread('my_image.bmp')\n\n")])])]),a("ul",[a("li",[e._v("Step 1: Edge detection\nIn order to improve edge detection, we will convert the color image to grayscale before performing a thresholding.")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)\nret,thresh = cv2.threshold(gray,250,255,cv2.THRESH_BINARY_INV)\n\nimg,edges,h=cv2.findEdges(thresh,cv2.RETR_EXTERNAL,cv2.CHAIN_APPROX_SIMPLE)\n\n")])])]),a("ul",[a("li",[e._v("Step 2: Edge estimation")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('for cnt in edges:\nperimeter =cv2.arcLength(cnt,True)\napprox = cv2.approxPolyDP(cnt,0.01* perimeter,True)\n\nM = cv2.moments(cnt)\ncX = int(M["m10"] / M["m00"])\ncY = int(M["m01"] / M["m00"])\ncv2.drawEdges(image,[cnt],-1,(0,255,0),2)\n\n')])])]),a("ul",[a("li",[e._v("Step 3 : Pattern classification")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("All you need to do is to recall how many peaks there are in each shape.\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('if len(approx)==3:\nshape = "triangle"\nelif len(approx)==4:\n(x, y, w, h) = cv2.boundingRect(approx)\nratio = w / float(h)\nif ratio >= 0.95 and ratio <= 1.05:\nshape = " square"\nelse:\nshape = "rectangle"\nelif len(approx)==5:\nshape = " pentagon"\nelif len(approx)==6:\nshape = " hexagon "\nelse:\nshape= "circle"\ncv2.putText(image, shape, (cX, cY), cv2.FONT_HERSHEY_SIMPLEX,0.5, (255, 255, 255), 2)\n\n')])])]),a("p",[e._v("We just have to display the result to check out our work:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("cv2.imshow('Final_image',image)\ncv2.waitKey(0)\ncv2.destroyAllWindows()\n")])])]),a("p",[e._v("##9. Conclusion")]),e._v(" "),a("p",[e._v("In this guide, we discussed the topic of Computer Vision using OpenCV and Python. We presented some fundamental tasks of Computer Vision such as Object Recognition and Semantic Segmentation. We also examined some case studies about the process of edge and face detection, feature extraction and object classification.")])])}),[],!1,null,null,null);t.default=n.exports}}]);