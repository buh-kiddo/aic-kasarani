"use client"

import { useParams } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Calendar, User, ArrowLeft } from "lucide-react"

const blogPosts = [
  {
    id: 1,
    title: "The Importance of Community in Faith",
    content: `
      <p><strong>Faith is not meant to be a solo journey.</strong></p>
      <br />
      <p>In today’s fast-paced world, it’s easy to feel isolated, but the Bible emphasizes the power of community.  
      <br />
      When we walk together in faith, we grow stronger, encourage one another, and deepen our relationship with God.</p>
      <br />

      <h2><strong>The Biblical Foundation of Community</strong></h2>
      <br />
      
      <p>From the very beginning, God designed us for relationships.</p>
      
      
      <p><strong><em>~Genesis 2:18</em></strong> says:  
      <br /><q> <i>It is not good for the man to be alone.</i></q></p>
      <br />
      
      <p>This applies not only to marriage but to the greater concept of fellowship.</p>
      
      <p>Jesus Himself demonstrated this by surrounding Himself with disciples, teaching us that spiritual growth flourishes in community.</p>
      <br />

      <h2><strong>Why Community Matters</strong></h2>
      <br />
      
      <ul>
        <li><strong>Encouragement & Support:</strong>  
          <br />
          <em>~ <strong>Hebrews 10:24-25</em></strong>  reminds us to:
          <br /><q> <i> Spur one another on toward love and good deeds... not giving up meeting together.</i></q>
        </li>
        <br />

        <li><strong>Accountability:</strong>  
          <br />
          <em><strong>~James 5:16</strong></em> encourages us to be open and accountable:  
          <br /><q><i>Confess your sins to each other and pray for each other so that you may be healed.</i></q>
        </li>
        <br />

        <li><strong>Using Our Gifts:</strong>  
          <br />
          <em><strong>~1 Corinthians 12</strong></em> compares the Church to a body—each member has a unique role, and together we thrive.
        </li>
      </ul>
      <br />

      <h2><strong>Overcoming Challenges in Community</strong></h2>
      
      <p>Being part of a community isn’t always easy—differences in personalities and opinions can cause friction.  
      <br />
      But these challenges also teach us patience, understanding, and love.</p>
      <br />

      <blockquote>
        <strong><i>"Be completely humble and gentle; be patient, bearing with one another in love."</i></strong>  
        <br />~ <em>Ephesians 4:2</em>
      </blockquote>
      <br />

      <p>True fellowship isn’t about perfection; it’s about growing together in Christ.</p>
      <br />

      <h2><strong>Conclusion</strong></h2>
      <br />
      
      <p><strong>Faith grows best in community.</strong>  
      <br /><br />
      By actively engaging in church, small groups, and spiritual friendships, we experience the full richness of God’s design for His people.</p>
      <br />

      <p>Let’s commit to walking this journey together, strengthening and uplifting one another in faith. 🙏</p>
      <br />
    `,
    author: "Pastor Charles Omondi",
    date: "January 26, 2025",
    image: "/images/blogs-img/blog-1.webp",
    category: "Faith",
  },
  {
    id: 2,
    title: "Understanding the Beatitudes",
    content: `
      <p><strong>The Beatitudes</strong>, found in Jesus' Sermon on the Mount in <em>~Matthew 5:3-12</em>,  
      are some of the most profound and challenging teachings in the Bible.</p>
      <br />

      <p>These statements, each beginning with <q><i>"Blessed are..."</i></q>, provide a counter-cultural perspective  
      on true happiness and the nature of God's kingdom.</p>
      <br />

      <h2><strong>The Beatitudes Explained</strong></h2>
      <br />

      <ol>
        <li>
          <strong>"Blessed are the poor in spirit, for theirs is the kingdom of heaven."</strong>  
          <br />
          This speaks to those who recognize their spiritual poverty and need for God.
        </li>
        <br />

        <li>
          <strong>"Blessed are those who mourn, for they will be comforted."</strong>  
          <br />
          This promises comfort to those who grieve, both over personal losses and the brokenness of the world.
        </li>
        <br />

        <li>
          <strong>"Blessed are the meek, for they will inherit the earth."</strong>  
          <br />
          Meekness here refers to gentleness and humility, not weakness.
        </li>
        <br />

        <li>
          <strong>"Blessed are those who hunger and thirst for righteousness, for they will be filled."</strong>  
          <br />
          This beatitude speaks to those who earnestly desire to live rightly before God.
        </li>
      </ol>
      <br />

      <h2><strong>Living Out the Beatitudes</strong></h2>
      <br />

      <p>The Beatitudes are not just nice sayings, but a call to a radically different way of life.  
      <br />
      They challenge us to find our satisfaction and identity in God rather than in worldly success or approval.</p>
      <br />

      <h2><strong>Conclusion</strong></h2>
      <br />

      <p>As we seek to understand and live out the Beatitudes, we align ourselves with the values of God's kingdom.  
      <br /><br />
      May we continually strive to embody these teachings in our daily lives, finding true blessedness in our relationship with God. 🙏</p>
      <br />

    `,
    author: "Pastor Charles Omondi",
    date: "Feb 02, 2025",
    image: "/images/blogs-img/blog-2.webp",
    category: "Bible Study",
  },
  {
    id: 3,
    title: "The Power of Forgiveness",
    content: `
      <p><strong>Forgiveness is a powerful act of grace, healing, and freedom.</strong></p>
      <br />

      <p>At some point in life, we all experience hurt, betrayal, or disappointment.  
      <br />
      Yet, the Bible teaches us that forgiveness is not just an option—it is a command.  
      <br />
      When we forgive, we release ourselves from the burden of resentment and allow God's peace to restore our hearts.</p>
      <br />

      <h2><strong>The Biblical Foundation of Forgiveness</strong></h2>
      <br />

      <p>Forgiveness is central to the Christian faith, demonstrated most profoundly through Jesus Christ.</p>
      <br />

      <p><em>~Ephesians 4:32</em> reminds us:</p>
      <blockquote>
        <strong><i>"Be kind and compassionate to one another, forgiving each other, just as in Christ God forgave you."</i></strong>
      </blockquote>
      <br />

      <p>Jesus Himself set the ultimate example when He prayed on the cross:</p>
      <blockquote>
        <strong><i>"Father, forgive them, for they do not know what they are doing."</i></strong>  
        <br />~ <em>Luke 23:34</em>
      </blockquote>
      <br />

      <h2><strong>Why Forgiveness is Essential</strong></h2>
      <br />

      <ul>
        <li><strong>Restores Our Relationship with God:</strong>  
          <br />
          <em>~Matthew 6:14-15</em> warns us that if we do not forgive others, our Heavenly Father will not forgive us.
        </li>
        <br />

        <li><strong>Brings Inner Healing:</strong>  
          <br />
          Unforgiveness breeds bitterness, but releasing it leads to emotional and spiritual healing.
        </li>
        <br />

        <li><strong>Frees Us from the Past:</strong>  
          <br />
          Forgiveness does not justify wrong actions, but it frees us from the weight of anger and hurt.
        </li>
        <br />

        <li><strong>Strengthens Relationships:</strong>  
          <br />
          Choosing to forgive fosters reconciliation, peace, and stronger bonds with others.
        </li>
      </ul>
      <br />

      <h2><strong>How to Cultivate a Forgiving Heart</strong></h2>
      <br />

      <p>Forgiveness is a process that requires humility, prayer, and reliance on God's strength.</p>
      <br />

      <p><strong>Practical Steps to Forgive:</strong></p>
      <ol>
        <li>Pray for God’s help to let go of the hurt.</li>
        <br />
        <li>Remember that Christ has forgiven you.</li>
        <br />
        <li>Choose to release bitterness and resentment.</li>
        <br />
        <li>Seek reconciliation when possible, but understand that forgiveness does not always require restored trust.</li>
      </ol>
      <br />

      <h2><strong>Conclusion</strong></h2>
      <br />

      <p><strong>Forgiveness is a gift we give ourselves and others.</strong>  
      <br /><br />
      By choosing to forgive, we walk in freedom, love, and obedience to God’s Word.  
      <br />
      Let us embrace the power of forgiveness and reflect Christ’s love in all our relationships. 🙏</p>
      <br />


    `,
    author: "Pastor Charles Omondi",
    date: "Feb 09, 2025",
    image: "/images/blogs-img/blog-3.webp",
    category: "Christian Living",
  },
  {
    id: 4,
    title: "Navigating Faith in a Digital Age",
    content: `
      <p><strong>In a world dominated by screens, social media, and instant communication, how do we keep our faith strong?</strong></p>
      <br />

      <p>Technology has transformed the way we connect, learn, and share.  
      <br />
      As Christians, we must navigate this digital landscape with wisdom, ensuring that our online presence reflects our faith and values.</p>
      <br />

      <h2><strong>The Challenges of Faith in a Digital World</strong></h2>
      <br />

      <ul>
        <li><strong>Distraction & Spiritual Drift:</strong>  
          <br />
          Endless scrolling, notifications, and online entertainment can pull us away from prayer, scripture, and real-life fellowship.
        </li>
        <br />

        <li><strong>Comparison & Identity Crisis:</strong>  
          <br />
          Social media often promotes unrealistic lifestyles, leading to insecurity and dissatisfaction.  
          <br />
          <em>~Galatians 1:10</em> reminds us:  
          <blockquote>
            <strong><i>"Am I now trying to win the approval of human beings, or of God?"</i></strong>
          </blockquote>
        </li>
        <br />

        <li><strong>Spreading Misinformation:</strong>  
          <br />
          False teachings, divisive debates, and misleading content can distort biblical truth.  
          <br />
          <em>~2 Timothy 4:3</em> warns:  
          <blockquote>
            <strong><i>"For the time will come when people will not put up with sound doctrine."</i></strong>
          </blockquote>
        </li>
      </ul>
      <br />

      <h2><strong>The Opportunities Technology Brings</strong></h2>
      <br />

      <ul>
        <li><strong>Spreading the Gospel:</strong>  
          <br />
          The digital world allows us to share God’s Word beyond borders—through blogs, videos, and online ministries.
        </li>
        <br />

        <li><strong>Building Online Christian Communities:</strong>  
          <br />
          Virtual Bible studies, faith-based podcasts, and social media groups provide new ways to connect and grow in Christ.
        </li>
        <br />

        <li><strong>Access to Spiritual Resources:</strong>  
          <br />
          We now have instant access to online sermons, devotionals, and Bible study tools, helping us deepen our faith anytime, anywhere.
        </li>
      </ul>
      <br />

      <h2><strong>How to Stay Spiritually Grounded Online</strong></h2>
      <br />

      <p><strong>Practical Steps for Digital Discipleship:</strong></p>
      <ol>
        <li>Set boundaries for screen time to prioritize real-life relationships and spiritual growth.</li>
        <br />
        <li>Engage with uplifting, faith-centered content that strengthens your walk with God.</li>
        <br />
        <li>Be a light in the digital world—use your platform to share encouragement, love, and biblical truth.</li>
        <br />
        <li>Pray for wisdom before engaging in online conversations, ensuring your words reflect Christ.</li>
      </ol>
      <br />

      <h2><strong>Conclusion</strong></h2>
      <br />

      <p><strong>Faith and technology can coexist when used with wisdom and purpose.</strong>  
      <br /><br />
      Instead of allowing digital distractions to weaken our faith, let’s use technology as a tool for God’s glory.  
      <br />
      May we be intentional in our online presence, standing as ambassadors of Christ in the digital age. 🙏</p>
      <br />


    `,
    author: "Pastor Charles Omondi",
    date: "Feb 16, 2025",
    image: "/images/blogs-img/blog-4.webp",
    category: "Modern Faith",
  },
]

export default function BlogPost() {
  const params = useParams()
  const postId = Number.parseInt(params.id as string)
  const post = blogPosts.find((p) => p.id === postId)

  if (!post) {
    return <div className="text-center text-gray-900 dark:text-white">Post not found</div>
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <Link
          href="/blog"
          className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors duration-300 inline-flex items-center mb-6"
        >
          <ArrowLeft className="mr-2" size={20} />
          Back to Blog
        </Link>
        <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">{post.title}</h1>
        <div className="flex items-center text-gray-600 dark:text-gray-400 mb-6">
          <User className="mr-2" size={16} />
          <span className="mr-4">{post.author}</span>
          <Calendar className="mr-2" size={16} />
          <span>{post.date}</span>
        </div>
        <Image
          src={post.image || "/placeholder.svg"}
          alt={post.title}
          width={600}
          height={400}
          className="w-full h-64 object-cover rounded-lg mb-8"
        />
        <div
          className="prose prose-indigo dark:prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </motion.div>
    </div>
  )
}

