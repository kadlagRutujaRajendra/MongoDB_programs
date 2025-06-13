# MongoDB_programs
# MongoDB installation steps
For Windows
1. Download MongoDB
Go to: https://www.mongodb.com/try/download/community

Choose:
Version: Latest or LTS
Platform: Windows
Package: MSI
Click Download.

2. Run the Installer
Double-click the .msi file.
Follow the setup wizard:
Select Complete installation.
Enable MongoDB as a Service (recommended).
You can also install MongoDB Compass (optional GUI).

3. Add MongoDB to system PATH (if not done automatically)
Go to C:\Program Files\MongoDB\Server\<version>\bin

Copy the path.
Add it to:
Control Panel → System → Advanced system settings → Environment Variables → Path

4. Verify Installation
Open Command Prompt and type:
mongod --version
mongo --version
