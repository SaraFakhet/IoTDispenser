#include <SPI.h>
#include <WiFiNINA.h>
#include <ArduinoHttpClient.h>

int ledPin = 12;
int buttonPin = 2;
int nbClick = 0;
boolean isLow = false;
boolean isHigh = true;

char serverName[] = "http://floating-retreat-20395.herokuapp.com";
int port = 80;
WiFiClient client;

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
}

// the loop function runs over and over again forever
void loop() { 
  countClick();
}

void connectWifi()
{
  while ( status != WL_CONNECTED) {
    status = WiFi.begin(ssid, pass);
    delay(1500);
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
    delay(500);
  }
}

void sendPost()
{
  String PostData = "{\"click\": \"" + String(nbClick) + "\"}";
  
  Serial.println(PostData);
  if (client.connect(serverName, port)) {
    Serial.println("connected");
    client.println("POST /arduino HTTP/1.1");
    
    client.println("Host: floating-retreat-20395.herokuapp.com");
    client.println("Content-Type: application/json;charset=utf-8");
    client.println("Connection: close");
    client.print("Content-Length: ");
    client.println(PostData.length());
    client.println();
    client.println(PostData);
    client.println();

    while(client.connected() && !client.available()) delay(1);
    while(client.connected() || client.available()) 
    {
      char c = client.read();
      Serial.write(c);
    }
  } else {
    Serial.println("connection failed");
  }
  
  Serial.println();
  Serial.println("post Over");
}
