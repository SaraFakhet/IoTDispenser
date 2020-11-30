#include <SPI.h>
#include <WiFiNINA.h>
#include <ArduinoHttpClient.h>

int ledPin = 12;
int buttonPin = 2;
int nbClick = 0;
boolean isLow = false;
boolean isHigh = true;

IPAddress serverName(192,168,43,128);
int port = 3000;
WiFiClient wifi;
HttpClient client = HttpClient(wifi, serverName, port);

char ssid[] = "Clement";
char pass[] = "12345678";
int status = WL_IDLE_STATUS;
String hostName = "www.google.com";
int pingResult;


void setup() {
  // initialize digital pin LED_BUILTIN as an output.
  Serial.begin(9600);
  pinMode(buttonPin, INPUT_PULLUP);
  pinMode(ledPin, OUTPUT);

  connectWifi();
  Serial.print("Client code : ");
  Serial.println(client.responseStatusCode());
}

// the loop function runs over and over again forever
void loop() { 
  countClick();
}

void connectWifi()
{
  while ( status != WL_CONNECTED) {
    status = WiFi.begin(ssid, pass);
    delay(3000);
  }

  Serial.print("Pinging ");
  Serial.print(hostName);
  Serial.print(": ");
  pingResult = WiFi.ping(hostName);
  if (pingResult >= 0) {
    Serial.print("SUCCESS! ");
    Serial.print(pingResult);
    Serial.println(" ms");
    digitalWrite(ledPin, HIGH);
  } else {
    Serial.print("FAILED! Error code: ");
    Serial.println(pingResult);
  }
}
void countClick()
{
  if ( (digitalRead(buttonPin) == LOW && isHigh) 
        || (digitalRead(buttonPin) == HIGH && isLow))
  {
    nbClick += 1;
    Serial.println(nbClick);
    isLow = !isLow;
    isHigh = !isHigh;
    sendPost();
    delay(1000);
  }
}

void sendPost()
{
  Serial.println("making POST request");
  
  String contentType = "application/x-www-form-urlencoded";
  String postData = "nbClcik=";

  client.post("/arduino", contentType, postData);

  // read the status code and body of the response
  int statusCode = client.responseStatusCode();
  if (statusCode >= 0)
  {
    String response = client.responseBody();
    Serial.print("Response: ");
    Serial.println(response);
  }
  else
  {
    Serial.println("Failed");
    Serial.print("status code : ");
    Serial.println(statusCode);
  }
}



/*
void post()
{
  Serial.println("connecting...");
  String PostData="sample={\"fittingId\":1,";
  unsigned char i;
  for(i=0;i<6;i++)
  {
    PostData=PostData+"\"channel-";
    PostData=String(PostData+i);
    PostData=PostData+"\":";
    PostData=String(PostData + String(analogRead(i)));
    if(i!=5)
      PostData=PostData+",";
  }
  PostData=PostData+"}";
  Serial.println(PostData);
  if (client.connect(serverName, port)) {
    Serial.println("connected");
    client.println("POST /arduino HTTP/1.1");
    client.println("Connection: close");
    client.println("Content-Type: application/x-www-form-urlencoded;");
    client.print("Content-Length: ");
    client.println(PostData.length());
    client.println();
    client.println(PostData);
  } else {
    Serial.println("connection failed");
  }
}
 */
