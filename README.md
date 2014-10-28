Enterprise Ecom
========

This a content package project generated using the multimodule-content-package-archetype.

Starting AEM 
-------------

java -XX:MaxPermSize=2048m -Xmx2048M   -agentlib:jdwp=transport=dt_socket,address=4512,server=y,suspend=n  -jar AEM_6.0_Quickstart.jar

Building
--------

This project uses Maven for building. Common commands:

From the root directory, run ``mvn -PautoInstallPackage clean install`` to build the bundle and content package and install to a CQ instance.

From the bundle directory, run ``mvn -PautoInstallBundle clean install`` to build *just* the bundle and install to a CQ instance.

Check out the home page: http://localhost:4502/editor.html/content/ecom/home.html

Using with VLT
--------------

Adding vlt path to the PATH variable:

1. vi ~/.bash_profile

2. Add the vlt path and export:

export VLT_HOME=<cq-installation>/crx-quickstart/opt/filevault/vault-cli-2.4.34
export PATH=$PATH:$VLT_HOME/bin

3. Save and close the file.


To use vlt with this project, first build and install the package to your local CQ instance as described above. Then cd to `content/src/main/content/jcr_root` and run

    vlt --credentials admin:admin checkout -f ../META-INF/vault/filter.xml --force http://localhost:4502/crx

Once the working copy is created, you can use the normal ``vlt up`` and ``vlt ci`` commands.

Specifying CRX Host/Port
------------------------

The CRX host and port can be specified on the command line with:
mvn -Dcrx.host=otherhost -Dcrx.port=5502 <goals>


